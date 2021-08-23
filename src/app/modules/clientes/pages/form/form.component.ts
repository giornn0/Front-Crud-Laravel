import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private clientesService: ClientesService
  ) {}

  clienteForm: FormGroup = this.fBuilder.group({
    id: '',
    nombre: ['', [Validators.required, Validators.maxLength(55)]],
    apellido: ['', [Validators.required, Validators.maxLength(55)]],
    email: [
      '',
      [Validators.required, Validators.maxLength(55), Validators.email],
    ],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if (data.cliente) {
        this.isEdit = true;
        this.clienteForm.reset(data.cliente);
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
    console.log('submiting', this.clienteForm.value);
  }
}
