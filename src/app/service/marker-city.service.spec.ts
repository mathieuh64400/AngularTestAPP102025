import { TestBed } from '@angular/core/testing';

import { MarkerCityService } from './marker-city.service';

describe('MarkerCityService', () => {
  let service: MarkerCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
