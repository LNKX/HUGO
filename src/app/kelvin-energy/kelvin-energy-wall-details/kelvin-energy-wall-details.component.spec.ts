import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyWallDetailsComponent } from './kelvin-energy-wall-details.component';

describe('KelvinEnergyWallDetailsComponent', () => {
  let component: KelvinEnergyWallDetailsComponent;
  let fixture: ComponentFixture<KelvinEnergyWallDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyWallDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyWallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
