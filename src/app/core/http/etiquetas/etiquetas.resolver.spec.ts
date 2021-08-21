import { TestBed } from '@angular/core/testing';

import { EtiquetasResolver } from './etiquetas.resolver';

describe('EtiquetasResolver', () => {
  let resolver: EtiquetasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EtiquetasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
