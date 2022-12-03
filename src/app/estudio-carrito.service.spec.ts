import { TestBed } from '@angular/core/testing';

import { EstudioCarritoService } from './estudio-carrito.service';

describe('EstudioCarritoService', () => {
  let service: EstudioCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudioCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
