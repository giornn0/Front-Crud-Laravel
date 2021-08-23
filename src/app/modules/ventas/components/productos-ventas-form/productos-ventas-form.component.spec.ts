import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVentasFormComponent } from './productos-ventas-form.component';

describe('ProductosVentasFormComponent', () => {
  let component: ProductosVentasFormComponent;
  let fixture: ComponentFixture<ProductosVentasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosVentasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosVentasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
