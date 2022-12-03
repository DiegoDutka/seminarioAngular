import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioClasesComponent } from './estudio-clases.component';

describe('EstudioClasesComponent', () => {
  let component: EstudioClasesComponent;
  let fixture: ComponentFixture<EstudioClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioClasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
