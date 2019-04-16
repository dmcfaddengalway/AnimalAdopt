import { TestBed } from '@angular/core/testing';

import { DisplayAdoptablesService } from './display-adoptables.service';

describe('DisplayAdoptablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayAdoptablesService = TestBed.get(DisplayAdoptablesService);
    expect(service).toBeTruthy();
  });
});
