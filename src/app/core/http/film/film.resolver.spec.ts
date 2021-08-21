import { TestBed } from '@angular/core/testing';

import { FilmResolver } from './film.resolver';

describe('FilmResolver', () => {
  let resolver: FilmResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FilmResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
