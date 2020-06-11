import { TestBed } from '@angular/core/testing';

import { FarmerSearchCommonService } from './farmer-search-common.service';

describe('FarmerSearchCommonService', () => {
  let service: FarmerSearchCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerSearchCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
