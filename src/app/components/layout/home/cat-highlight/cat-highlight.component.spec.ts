import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CatHighlightComponent } from './cat-highlight.component';

describe('CatHighlightComponent', () => {
  let component: CatHighlightComponent;
  let fixture: ComponentFixture<CatHighlightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
