import { TestBed } from '@angular/core/testing';

import { ListingservService } from './listingserv.service';

describe('ListingservService', () => {
  let service: ListingservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
