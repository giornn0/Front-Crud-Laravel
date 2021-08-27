import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosVentaService } from 'src/app/core/http/productos-venta/productos-venta.service';
import { ProductoVenta } from 'src/app/shared/models/producto-venta.model';
import { Producto } from 'src/app/shared/models/producto.model';

@Component({
  selector: 'app-productos-ventas-form',
  templateUrl: './productos-ventas-form.component.html',
  styleUrls: ['./productos-ventas-form.component.css'],
})
export class ProductosVentasFormComponent implements OnInit {
  @Input() productos: Producto[] = [];
  @Input() prodEnLista: ProductoVenta = {} as ProductoVenta;
  @Input() id = '';
  @Output() addProducto: EventEmitter<ProductoVenta> = new EventEmitter();

  isListed = false;

  constructor(
    private prodVentaService: ProductosVentaService,
    private fBuilder: FormBuilder
  ) {}

  prodVentaForm: FormGroup = this.fBuilder.group({
    id: '',
    venta_id: [''],
    producto_id: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    total: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.prodVentaForm.controls['precio'].valueChanges.subscribe((precio) =>
      this.prodVentaForm.controls['total'].setValue(
        precio * this.prodVentaForm.controls['cantidad'].value
      )
    );
    this.prodVentaForm.controls['cantidad'].valueChanges.subscribe((cantidad) =>
      this.prodVentaForm.controls['total'].setValue(
        cantidad * this.prodVentaForm.controls['precio'].value
      )
    );
    if (this.prodEnLista.id) {
      this.prodVentaForm.reset(this.prodEnLista);
      this.isListed = true;
    }
    this.prodVentaForm.valueChanges.subscribe((form) => {
      this.prodEnLista = form;
      console.log(this.id)
    });
  }

  isInvalid(field: string): boolean {
    return !!(
      this.prodVentaForm.controls[field].touched &&
      this.prodVentaForm.controls[field].invalid
    );
  }

  addOrEditProducto() {
    console.log(this.prodEnLista, this.isListed);
    if (this.prodVentaForm.valid) {
      if (this.isListed)
        this.prodVentaService
          .updateProducto(this.prodVentaForm.value)
          .subscribe((res) => {
            console.log(res);
          });
      if (!this.isListed) {
        this.prodVentaForm.controls['venta_id'].setValue(parseInt(this.id));
        this.prodVentaService
          .chargeProducto(this.prodVentaForm.value)
          .subscribe((res: any) => {
            this.addProducto.emit(res.prodCargado);
          });
      }
    }
  }
  deleteProducto() {}
}
