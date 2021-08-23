import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etiqueta } from 'src/app/shared/models/etiqueta.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  etiquetas: Etiqueta[] = [];
  columnas: string[] = ['Nombre','Acciones']

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.etiquetas = data.etiquetas.etiquetas as Etiqueta[];
    });
  }
}
