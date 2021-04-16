import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DogHighlightComponent } from './dog-highlight.component';

describe('DogHighlightComponent', () => {
  let component: DogHighlightComponent;
  let fixture: ComponentFixture<DogHighlightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DogHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
