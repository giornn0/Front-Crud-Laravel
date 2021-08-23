import { TestBed } from '@angular/core/testing';

import { ProductosVentaResolver } from './productos-venta.resolver';

describe('ProductosVentaResolver', () => {
  let resolver: ProductosVentaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductosVentaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
