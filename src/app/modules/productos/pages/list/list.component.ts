import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/core/http/productos/productos.service';
import { Producto } from 'src/app/shared/models/producto.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  productos: Producto[] = [];
  columnas: string[] = ['Nombre', 'Acciones'];
  total = 0;
  currentPage = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.productos = data.productos.data as Producto[];
      this.total = data.productos.total;
      this.currentPage = data.productos.current_page;
    });
  }
  pageChangeEvent(event: any) {
    const page = event.pageIndex + 1;
    this.router.navigate([`/productos`], { queryParams: { page: page } });
    this.activatedRoute.queryParams.subscribe((res) =>
      this.productosService
        .index(res.page)
        .subscribe((res: any) => (this.productos = res.data as Producto[]))
    );
  }
  delete(id: number) {
    this.productosService.delete(id).subscribe(() => {
      this.productosService.index(this.currentPage).subscribe((res: any) => {
        this.productos = res.data;
        this.total = res.total;
      });
    });
  }
}
