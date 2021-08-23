import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  removed_etiquetas: Etiqueta[] = [];
  selected_etiquetas: any[] = [];
  pushing = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fBuilder: FormBuilder,
    private productosService: ProductosService
  ) {}

  productoForm: FormGroup = this.fBuilder.group({
    id: '',
    nombre: ['', [Validators.required, Validators.maxLength(55)]],
    descripcion: ['', [Validators.maxLength(200)]],
    etiquetas: ['', []],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.etiquetas = data.etiquetas.etiquetas as Etiqueta[];
      console.log(data.producto);
      if (data.producto) {
        this.isEdit = true;
        this.productoForm.reset(data.producto[0]);
        this.selected_etiquetas = data.producto[1];
      }
    });
  }
  isInvalid(field: string): boolean {
    return !!(
      this.productoForm.controls[field].touched &&
      this.productoForm.controls[field].invalid
    );
  }
  addEtiqueta(value: number | undefined) {
    if (this.selected_etiquetas.includes(value)) return;
    if (this.selected_etiquetas.length === 3) {
      this.pushing = true;
      return;
    }
    this.selected_etiquetas.push(value);
    this.etiquetas = this.etiquetas.filter((etiqueta) => {
      if (etiqueta.id != value) {
        return etiqueta;
      }
      this.removed_etiquetas.push(etiqueta);
      return;
    });
    this.productoForm.controls['etiquetas'].setValue(this.selected_etiquetas);
  }
  removeEtiqueta(value: number | undefined) {
    this.selected_etiquetas = this.selected_etiquetas.filter(
      (id) => id != value
    );
    this.productoForm.controls['etiquetas'].setValue(this.selected_etiquetas);
    this.removed_etiquetas = this.removed_etiquetas.filter(
      (etiqueta: Etiqueta) => {
        if (etiqueta.id != value) {
          return etiqueta;
        }
        this.etiquetas.push(etiqueta);
        return;
      }
    );
  }
  submit() {
    console.log('submiting', this.productoForm.value);
  }
}
