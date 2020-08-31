import { TestBed } from '@angular/core/testing';

import { CharactersSimpleService } from './characters-simple.service';

describe('CharactersSimpleService', () => {
  let service: CharactersSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
