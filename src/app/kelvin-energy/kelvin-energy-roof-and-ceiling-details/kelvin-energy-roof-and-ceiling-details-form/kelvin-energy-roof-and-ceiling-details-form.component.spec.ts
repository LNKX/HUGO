import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyRoofAndCeilingDetailsFormComponent } from './kelvin-energy-roof-and-ceiling-details-form.component';

describe('KelvinEnergyRoofAndCeilingDetailsFormComponent', () => {
  let component: KelvinEnergyRoofAndCeilingDetailsFormComponent;
  let fixture: ComponentFixture<KelvinEnergyRoofAndCeilingDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyRoofAndCeilingDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyRoofAndCeilingDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
