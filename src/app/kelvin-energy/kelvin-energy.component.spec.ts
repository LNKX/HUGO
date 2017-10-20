import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergyComponent } from './kelvin-energy.component';

describe('KelvinEnergyComponent', () => {
  let component: KelvinEnergyComponent;
  let fixture: ComponentFixture<KelvinEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
