import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimalProfileComponent } from './animal-profile.component';

describe('AnimalProfileComponentComponent', () => {
  let component: AnimalProfileComponent;
  let fixture: ComponentFixture<AnimalProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
