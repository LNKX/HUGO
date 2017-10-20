import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinEnergySiteDetailsComponent } from './kelvin-energy-site-details.component';

describe('KelvinEnergySiteDetailsComponent', () => {
  let component: KelvinEnergySiteDetailsComponent;
  let fixture: ComponentFixture<KelvinEnergySiteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelvinEnergySiteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinEnergySiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
