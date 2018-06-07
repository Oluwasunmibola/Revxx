import { TestBed, inject } from '@angular/core/testing';

import { RevxxserviceService } from './revxxservice.service';

describe('RevxxserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevxxserviceService]
    });
  });

  it('should be created', inject([RevxxserviceService], (service: RevxxserviceService) => {
    expect(service).toBeTruthy();
  }));
});
