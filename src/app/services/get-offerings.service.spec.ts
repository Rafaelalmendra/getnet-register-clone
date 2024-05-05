import { TestBed } from '@angular/core/testing';

import { GetOfferingsService } from './get-offerings.service';

describe('GetOfferingsService', () => {
  let service: GetOfferingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOfferingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
