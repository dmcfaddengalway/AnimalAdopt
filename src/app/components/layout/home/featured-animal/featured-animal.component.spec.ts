import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAnimalComponent } from './featured-animal.component';

describe('FeaturedAnimalComponent', () => {
  let component: FeaturedAnimalComponent;
  let fixture: ComponentFixture<FeaturedAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
