import { TestBed } from '@angular/core/testing';

import { InternalisationService } from './internalisation.service';

describe('InternalisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternalisationService = TestBed.get(InternalisationService);
    expect(service).toBeTruthy();
  });
});
