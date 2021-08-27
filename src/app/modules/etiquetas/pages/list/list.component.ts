import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtiquetasService } from 'src/app/core/http/etiquetas/etiquetas.service';
import { Etiqueta } from 'src/app/shared/models/etiqueta.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  etiquetas: Etiqueta[] = [];
  columnas: string[] = ['Nombre', 'Acciones'];
  total = 0;
  currentPage = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private etiquetasService: EtiquetasService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.etiquetas = data.etiquetas.etiquetas as Etiqueta[];
      this.total = data.etiquetas.total;
      this.currentPage = data.etiquetas.current_page;
    });
  }
  pageChangeEvent(event: any) {
    const page = event.pageIndex + 1;
    this.router.navigate([`/etiquetas`], { queryParams: { page: page } });
    this.activatedRoute.queryParams.subscribe((res) =>
      this.etiquetasService
        .index(res.page)
        .subscribe((res: any) => (this.etiquetas = res.data as Etiqueta[]))
    );
  }
  delete(id: number) {
    this.etiquetasService.delete(id).subscribe(() => {
      this.etiquetasService.index(this.currentPage).subscribe((res: any) => {
        this.etiquetas = res.data;
        this.total = res.total;
      });
    });
  }
}
