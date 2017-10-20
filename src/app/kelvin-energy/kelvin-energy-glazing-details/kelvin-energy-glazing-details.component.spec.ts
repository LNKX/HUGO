import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyGlazingDetailsComponent } from './kelvin-energy-glazing-details.component';

describe('KelvinEnergyGlazingDetailsComponent', () => {
  let component: KelvinEnergyGlazingDetailsComponent;
  let fixture: ComponentFixture<KelvinEnergyGlazingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyGlazingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyGlazingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
