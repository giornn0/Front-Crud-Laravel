import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from 'src/app/core/http/ventas/ventas.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ProductoVenta } from 'src/app/shared/models/producto-venta.model';
import { Producto } from 'src/app/shared/models/producto.model';
import { Venta } from 'src/app/shared/models/venta.model';

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
  venta: Venta = {} as Venta;

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
    monto: [{ value: 0, disabled: true }, [Validators.pattern('')]],
  });

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      // console.log(data);
      this.clientes = data.clientes.clientes as Cliente[];
      this.productos = data.productos as Producto[];
      if (data.venta) {
        this.isEdit = true;
        this.venta = data.venta;
        this.ventaForm.reset(data.venta);
        // this.ventaForm.controls['monto']= data.prod_en_venta
        this.prodListados = Object.values(
          data.prod_en_venta
        ) as ProductoVenta[];
        this.prodListados.forEach((prod) => {
          this.ventaForm.controls['monto'].setValue(
            prod.total + this.ventaForm.controls['monto'].value
          );
          this.venta.monto = this.ventaForm.controls['monto'].value;
        });
      }
    });
    this.ventaForm.valueChanges.subscribe((form) => (this.venta = form));
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
    this.venta.monto = this.ventaForm.controls['monto'].value;
  }
  removeProducto(producto: ProductoVenta) {}
  submit() {
    if (this.ventaForm.valid) {
      if (this.isEdit) {
        this.ventasService
          .edit(this.venta, this.venta.id!)
          .subscribe((res: any) => {});
      }
      if (!this.isEdit) {
        this.venta.monto = 0;
        this.ventasService.create(this.venta).subscribe((res: any) => {
          this.ventaForm.controls['id'].setValue(res.venta.id);
          this.router.navigateByUrl(`ventas/editar/${res.venta.id}`);
        });
      }
    }
  }
  terminar() {
    if (this.isEdit)
      this.ventasService
        .edit(this.ventaForm.value, this.ventaForm.controls['id'].value)
        .subscribe((res) => this.router.navigateByUrl(`/ventas?page=1`));
    else {
      this.router.navigateByUrl(`/ventas?page=1`);
    }
  }
  cancel() {
    this.router.navigateByUrl(`/ventas?page=1`);
  }
}
