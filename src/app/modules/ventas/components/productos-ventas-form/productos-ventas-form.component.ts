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
  @Output() addProducto: EventEmitter<ProductoVenta> = new EventEmitter();
  @Output() editProducto: EventEmitter<ProductoVenta> = new EventEmitter();

  isListed = false;

  constructor(
    private prodVenta: ProductosVentaService,
    private fBuilder: FormBuilder
  ) {}

  prodVentaForm: FormGroup = this.fBuilder.group({
    id: '',
    venta_id: ['', [Validators.required]],
    producto_id: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    total: ['', [Validators.required]],
  });

  ngOnInit(): void {
    if (this.prodEnLista) {
      console.log('prod  en lista');
      this.prodVentaForm.reset(this.prodEnLista);
    }
  }
}
