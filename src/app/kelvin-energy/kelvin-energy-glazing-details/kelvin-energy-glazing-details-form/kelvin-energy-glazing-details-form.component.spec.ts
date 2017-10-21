import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyGlazingDetailsFormComponent } from './kelvin-energy-glazing-details-form.component';

describe('KelvinEnergyGlazingDetailsFormComponent', () => {
  let component: KelvinEnergyGlazingDetailsFormComponent;
  let fixture: ComponentFixture<KelvinEnergyGlazingDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyGlazingDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyGlazingDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
