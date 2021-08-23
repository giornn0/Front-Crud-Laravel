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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.etiquetas = data.etiquetas.data as Etiqueta[];
    });
  }
}
