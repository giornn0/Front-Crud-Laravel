import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/core/http/clientes/clientes.service';

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
    private clientesService: ClientesService,
    private router: Router
  ) {}

  clienteForm: FormGroup = this.fBuilder.group({
    id: '',
    nombre: ['', [Validators.required, Validators.maxLength(55)]],
    apellido: ['', [Validators.required, Validators.maxLength(55)]],
    email: [
      '',
      [Validators.required, Validators.maxLength(55), Validators.pattern(/[a-zA-Z-.0-9]+@[a-zA-Z-]+\.(com|edu|net)/)],
    ],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if (data.cliente) {
        this.isEdit = true;
        this.clienteForm.reset(data.cliente);
        this.clienteForm.controls['email'].disable()
      }
    });
  }
  isInvalid(field: string): boolean {
    return !!(
      this.clienteForm.controls[field].touched &&
      this.clienteForm.controls[field].invalid
    );
  }
  submit() {
    if (this.clienteForm.valid) {
      if (this.isEdit)
        this.clientesService
          .edit(this.clienteForm.value, this.clienteForm.controls['id'].value)
          .subscribe((res) => {
            this.router.navigateByUrl(`clientes?page=1`);
          });
      if (!this.isEdit)
        this.clientesService.create(this.clienteForm.value).subscribe((res) => {
          this.router.navigateByUrl(`clientes?page=1`);
        });
    }
  }
}
