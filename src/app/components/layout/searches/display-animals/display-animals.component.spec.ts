import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayAnimalsComponent } from './display-animals.component';

describe('DisplayAnimalsComponent', () => {
  let component: DisplayAnimalsComponent;
  let fixture: ComponentFixture<DisplayAnimalsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
