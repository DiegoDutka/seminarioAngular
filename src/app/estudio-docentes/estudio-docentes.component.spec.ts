import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioDocentesComponent } from './estudio-docentes.component';

describe('EstudioDocentesComponent', () => {
  let component: EstudioDocentesComponent;
  let fixture: ComponentFixture<EstudioDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioDocentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
