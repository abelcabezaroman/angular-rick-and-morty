import { TestBed } from '@angular/core/testing';

import { FavoritesLocalService } from './favorites-local.service';

describe('FavoritesLocalService', () => {
  let service: FavoritesLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
