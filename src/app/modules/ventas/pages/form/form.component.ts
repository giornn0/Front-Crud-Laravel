import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from 'src/app/core/http/ventas/ventas.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ProductoVenta } from 'src/app/shared/models/producto-venta.model';
import { Producto } from 'src/app/shared/models/producto.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isEdit = false;
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  prodListados: ProductoVenta[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fBuilder: FormBuilder,
    private ventasService: VentasService,
    private router: Router
  ) {}

  ventaForm: FormGroup = this.fBuilder.group({
    id: '',
    fecha: ['', [Validators.required]],
    cliente_id: ['', [Validators.required, Validators.pattern('')]],
    monto: [0, [Validators.pattern('')]],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      // console.log(data);
      this.clientes = data.clientes.clientes as Cliente[];
      this.productos = data.productos as Producto[];
      if (data.venta) {
        this.isEdit = true;
        this.ventaForm.reset(data.venta);
        this.prodListados = Object.values(data.prod_en_venta);
      }
    });
  }
  isInvalid(field: string): boolean {
    return !!(
      this.ventaForm.controls[field].touched &&
      this.ventaForm.controls[field].invalid
    );
  }
  pushProducto(producto: ProductoVenta) {
    this.prodListados.push(producto);
    this.ventaForm.controls['monto'].setValue(
      this.ventaForm.controls['monto'].value + producto.total
    );
  }
  removeProducto(producto: ProductoVenta) {}
  submit() {
    if (this.ventaForm.valid) {
      if (this.isEdit)
        this.ventasService
          .edit(this.ventaForm.value, this.ventaForm.controls['id'].value)
          .subscribe((res: any) => {
            // this.router.navigateByUrl(`ventas?page=1`);
          });
      if (!this.isEdit)
        this.ventasService
          .create(this.ventaForm.value)
          .subscribe((res: any) => {
            console.log(res);
            this.ventaForm.controls['id'].setValue(res.venta.id);
            // this.router.navigateByUrl(`ventas?page=1`);
          });
    }
  }
}
