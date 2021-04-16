import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileSquaresComponent } from './profile-squares.component';

describe('ProfileSquaresComponent', () => {
  let component: ProfileSquaresComponent;
  let fixture: ComponentFixture<ProfileSquaresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSquaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
