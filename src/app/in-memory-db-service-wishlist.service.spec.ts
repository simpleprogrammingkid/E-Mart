import { TestBed } from '@angular/core/testing';

import { InMemoryDbServiceWishlistService } from './in-memory-db-service-wishlist.service';

describe('InMemoryDbServiceWishlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDbServiceWishlistService = TestBed.get(InMemoryDbServiceWishlistService);
    expect(service).toBeTruthy();
  });
});
