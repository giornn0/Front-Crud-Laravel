import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/core/http/film/film.service';
import { Film } from 'src/app/shared/models/film.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  film: Film = {} as Film;
  isEdit: boolean = false;
  portrait: Blob = new Blob();
  formData: FormData = new FormData();
  portURL: SafeUrl = '';

  constructor(
    private fBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private filmService: FilmService
  ) {}

  filmForm: FormGroup = this.fBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    release_year: ['', [Validators.required]],
    language: ['', [Validators.required]],
    original_language: [''],
    length: ['', [Validators.required]],
    replacement_cost: [''],
    rating: [''],
    special_features: [''],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

  invalid(field: string): boolean {
    return !!(
      this.filmForm.controls[field].invalid &&
      this.filmForm.controls[field].touched
    );
  }

  updatePortrait(portrait: any) {
    this.formData = new FormData();
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      this.portrait = new Blob(portrait.target.files, {
        type: portrait.target.files[0].type,
      });
      this.formData.append('file', this.portrait);
      const source = window.URL.createObjectURL(this.portrait);
      this.portURL = this.sanitizer.bypassSecurityTrustUrl(source);
    };
    reader.readAsArrayBuffer(portrait.target.files[0]);
  }

  erasePortarit() {
    this.portURL = '';
  }

  submit() {
    if (this.filmForm.valid) {
      if (this.isEdit)
        this.filmService
          .update(this.filmForm.value, this.film.film_id)
          .subscribe((res) => {
            if (this.portURL) {
              console.log('aqui uploadd portrait');
            }
          });
      else this.filmService.create(this.filmForm.value);
    }
  }
}
