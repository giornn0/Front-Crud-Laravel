import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venta } from 'src/app/shared/models/venta.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  ventas: Venta[] = [];
  columnas: string[] = ['Fecha', 'Monto', 'Acciones'];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      if (data.ventas) this.ventas = data.ventas.data as Venta[];
    });
  }
}
