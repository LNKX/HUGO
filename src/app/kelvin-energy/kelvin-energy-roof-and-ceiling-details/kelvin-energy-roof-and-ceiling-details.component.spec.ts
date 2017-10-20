import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyRoofAndCeilingDetailsComponent } from './kelvin-energy-roof-and-ceiling-details.component';

describe('KelvinEnergyRoofAndCeilingDetailsComponent', () => {
  let component: KelvinEnergyRoofAndCeilingDetailsComponent;
  let fixture: ComponentFixture<KelvinEnergyRoofAndCeilingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyRoofAndCeilingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyRoofAndCeilingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
