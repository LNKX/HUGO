import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyFloorDetailsComponent } from './kelvin-energy-floor-details.component';

describe('KelvinEnergyFloorDetailsComponent', () => {
  let component: KelvinEnergyFloorDetailsComponent;
  let fixture: ComponentFixture<KelvinEnergyFloorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyFloorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyFloorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
