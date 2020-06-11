import { TestBed } from '@angular/core/testing';

import { FarmerSearchAbstractService } from './farmer-search-abstract.service';

describe('FarmerSearchAbstractService', () => {
  let service: FarmerSearchAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerSearchAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
