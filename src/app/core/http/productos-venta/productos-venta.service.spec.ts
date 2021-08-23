import { TestBed } from '@angular/core/testing';

import { ProductosVentaService } from './productos-venta.service';

describe('ProductosVentaService', () => {
  let service: ProductosVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
