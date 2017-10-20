import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyFloorDetailsFormComponent } from './kelvin-energy-floor-details-form.component';

describe('KelvinEnergyFloorDetailsFormComponent', () => {
  let component: KelvinEnergyFloorDetailsFormComponent;
  let fixture: ComponentFixture<KelvinEnergyFloorDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyFloorDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyFloorDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
