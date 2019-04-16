import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSquaresComponent } from './profile-squares.component';

describe('ProfileSquaresComponent', () => {
  let component: ProfileSquaresComponent;
  let fixture: ComponentFixture<ProfileSquaresComponent>;

  beforeEach(async(() => {
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
