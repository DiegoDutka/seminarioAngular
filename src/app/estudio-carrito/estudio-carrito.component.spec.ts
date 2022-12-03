import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioCarritoComponent } from './estudio-carrito.component';

describe('EstudioCarritoComponent', () => {
  let component: EstudioCarritoComponent;
  let fixture: ComponentFixture<EstudioCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
