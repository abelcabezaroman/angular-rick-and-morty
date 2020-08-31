import { TestBed } from '@angular/core/testing';

import { LocationsSimpleService } from './locations-simple.service';

describe('LocationsSimpleService', () => {
  let service: LocationsSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
