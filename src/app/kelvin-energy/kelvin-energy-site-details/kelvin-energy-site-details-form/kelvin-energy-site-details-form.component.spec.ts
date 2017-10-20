import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergySiteDetailsFormComponent } from './kelvin-energy-site-details-form.component';

describe('KelvinEnergySiteDetailsFormComponent', () => {
  let component: KelvinEnergySiteDetailsFormComponent;
  let fixture: ComponentFixture<KelvinEnergySiteDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergySiteDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergySiteDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
