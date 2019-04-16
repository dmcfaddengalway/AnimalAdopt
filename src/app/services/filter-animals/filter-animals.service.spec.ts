import { TestBed } from '@angular/core/testing';

import { FilterAnimalsService } from './filter-animals.service';

describe('FilterAnimalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterAnimalsService = TestBed.get(FilterAnimalsService);
    expect(service).toBeTruthy();
  });
});
