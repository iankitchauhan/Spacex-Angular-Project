import { TestBed } from '@angular/core/testing';

import { SpacexService } from './spacex.service';

describe('SpacexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexService = TestBed.get(SpacexService);
    expect(service).toBeTruthy();
  });
});
