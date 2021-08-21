import { TestBed } from '@angular/core/testing';

import { AuthLoggedInterceptor } from './auth-logged.interceptor';

describe('AuthLoggedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthLoggedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthLoggedInterceptor = TestBed.inject(AuthLoggedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
