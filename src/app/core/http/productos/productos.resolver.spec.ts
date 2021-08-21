import { TestBed } from '@angular/core/testing';

import { ProductosResolver } from './productos.resolver';

describe('ProductosResolver', () => {
  let resolver: ProductosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
