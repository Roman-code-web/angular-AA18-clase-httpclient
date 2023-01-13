import { TestBed } from '@angular/core/testing';

import { DatajsonAPIService } from './datajson-api.service';

describe('DatajsonAPIService', () => {
  let service: DatajsonAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatajsonAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
