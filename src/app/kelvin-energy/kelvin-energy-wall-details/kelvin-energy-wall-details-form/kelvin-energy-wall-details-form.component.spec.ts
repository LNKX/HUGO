import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyWallDetailsFormComponent } from './kelvin-energy-wall-details-form.component';

describe('KelvinEnergyWallDetailsFormComponent', () => {
  let component: KelvinEnergyWallDetailsFormComponent;
  let fixture: ComponentFixture<KelvinEnergyWallDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyWallDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyWallDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
