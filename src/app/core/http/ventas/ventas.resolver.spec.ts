import { TestBed } from '@angular/core/testing';

import { VentasResolver } from './ventas.resolver';

describe('VentasResolver', () => {
  let resolver: VentasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VentasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
