import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuToolbarComponent } from './main-menu-toolbar.component';

describe('MainMenuToolbarComponent', () => {
  let component: MainMenuToolbarComponent;
  let fixture: ComponentFixture<MainMenuToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
