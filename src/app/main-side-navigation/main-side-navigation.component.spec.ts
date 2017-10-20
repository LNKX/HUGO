import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSideNavigationComponent } from './main-side-navigation.component';

describe('MainSideNavigationComponent', () => {
  let component: MainSideNavigationComponent;
  let fixture: ComponentFixture<MainSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
