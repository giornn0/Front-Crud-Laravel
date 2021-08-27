import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/core/http/clientes/clientes.service';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  clientes: Cliente[] = [];
  columnas: string[] = ['Nombre', 'Apellido', 'Acciones'];
  total = 0;
  currentPage = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.clientes = data.clientes.data as Cliente[];
      this.total = data.clientes.total;
      this.currentPage = data.clientes.current_page;
    });
  }
  pageChangeEvent(event: any) {
    const page = event.pageIndex + 1;
    this.router.navigate([`/clientes`], { queryParams: { page: page } });
    this.activatedRoute.queryParams.subscribe((res) =>
      this.clientesService
        .index(res.page)
        .subscribe((res: any) => (this.clientes = res.data as Cliente[]))
    );
  }
  delete(id: number) {
    this.clientesService.delete(id).subscribe(() => {
      this.clientesService.index(this.currentPage).subscribe((res: any) => {
        this.clientes = res.data;
        this.total = res.total;
      });
    });
  }
}
