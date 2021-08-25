import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/core/http/productos/productos.service';
import { Etiqueta } from 'src/app/shared/models/etiqueta.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isEdit = false;
  etiquetas: Etiqueta[] = [];
  etiquetasLista: Etiqueta[] = [];
  etiquetasForm: any[] = [];
  pushing = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router
  ) {}

  productoForm: FormGroup = this.fBuilder.group({
    id: '',
    nombre: ['', [Validators.required, Validators.maxLength(55)]],
    descripcion: ['', [Validators.maxLength(200)]],
    etiquetas: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.productoForm.controls['etiquetas'].valueChanges.subscribe((id) => {
      this.etiquetas = this.etiquetas.filter((etiqueta) => {
        if (etiqueta.id === id) {
          this.etiquetasLista.push(etiqueta);
          this.etiquetasForm.push(etiqueta.id);
          return;
        }
        return etiqueta;
      });
    });
    this.activatedRoute.data.subscribe((data) => {
      this.etiquetas = data.etiquetas.etiquetas as Etiqueta[];
      if (data.producto) {
        this.isEdit = true;
        this.productoForm.reset(data.producto[0]);
        data.producto[1].forEach((etiqueta: number) => {
          this.productoForm.controls['etiquetas'].setValue(etiqueta);
        });
      }
    });
  }
  isInvalid(field: string): boolean {
    return !!(
      this.productoForm.controls[field].touched &&
      this.productoForm.controls[field].invalid
    );
  }
  removeEtiqueta(value: Etiqueta) {
    this.etiquetasLista = this.etiquetasLista.filter((etiqueta) => {
      if (etiqueta == value) {
        this.etiquetas.push(etiqueta);
        return;
      }
      return etiqueta;
    });
    this.etiquetasForm = this.etiquetasForm.filter((ids) => {
      if (ids === value.id) return;
      return ids;
    });
  }
  submit() {
    if (this.productoForm.valid) {
      console.log(this.productoForm.value);
      if (this.isEdit)
        this.productosService
          .edit(this.productoForm.value, this.productoForm.controls['id'].value)
          .subscribe((res) => this.router.navigateByUrl(`productos?page=1`));
      if (!this.isEdit)
        this.productosService
          .create(this.productoForm.value)
          .subscribe((res) => {
            this.router.navigateByUrl(`productos?page=1`);
          });
    }
  }
}
