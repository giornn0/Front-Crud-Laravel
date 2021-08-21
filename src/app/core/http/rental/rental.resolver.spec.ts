import { TestBed } from '@angular/core/testing';

import { RentalResolver } from './rental.resolver';

describe('RentalResolver', () => {
  let resolver: RentalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RentalResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
