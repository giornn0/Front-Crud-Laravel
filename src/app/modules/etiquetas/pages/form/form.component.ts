import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtiquetasService } from 'src/app/core/http/etiquetas/etiquetas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isEdit = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fBuilder: FormBuilder,
    private etiquetasService: EtiquetasService
  ) {}

  etiquetaForm: FormGroup = this.fBuilder.group({
    id: '',
    nombre: ['', [Validators.required, Validators.maxLength(55)]],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      if (data.etiqueta) {
        this.isEdit = true;
        this.etiquetaForm.reset(data.etiqueta);
      }
    });
  }
  isInvalid(field: string): boolean {
    return !!(
      this.etiquetaForm.controls[field].touched &&
      this.etiquetaForm.controls[field].invalid
    );
  }
  submit() {
    console.log('submiting', this.etiquetaForm.value);
  }
}
