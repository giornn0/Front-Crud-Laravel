import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from 'src/app/core/http/ventas/ventas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isEdit = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fBuilder: FormBuilder,
    private ventasService: VentasService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }
}
