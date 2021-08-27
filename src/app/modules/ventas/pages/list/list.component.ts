import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from 'src/app/core/http/ventas/ventas.service';
import { Venta } from 'src/app/shared/models/venta.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  ventas: Venta[] = [];
  columnas: string[] = ['Fecha', 'Monto', 'Acciones'];
  total = 0;
  currentPage = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ventasService: VentasService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if (data.ventas) {
        this.ventas = data.ventas.data as Venta[];
        this.total = data.ventas.total;
        this.currentPage = data.ventas.current_page;
      }
    });
  }
  pageChangeEvent(event: any) {
    const page = event.pageIndex + 1;
    this.router.navigate([`/ventas`], { queryParams: { page: page } });
    this.activatedRoute.queryParams.subscribe((res) =>
      this.ventasService
        .index(res.page)
        .subscribe((res: any) => (this.ventas = res.data as Venta[]))
    );
  }
  delete(id: number) {
    this.ventasService.delete(id).subscribe(() => {
      this.ventasService.index(this.currentPage).subscribe((res: any) => {
        this.ventas = res.data;
        this.total = res.total;
      });
    });
  }
}
