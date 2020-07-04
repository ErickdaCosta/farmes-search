import { TestBed } from '@angular/core/testing';

import { FarmersFirebaseService } from './farmers-firebase.service';

describe('FarmesFirebaseService', () => {
  let service: FarmersFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmersFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
