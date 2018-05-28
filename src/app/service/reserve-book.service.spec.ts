import {inject, TestBed} from '@angular/core/testing';

import {ReserveBookService} from './reserve-book.service';

describe('ReserveBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReserveBookService]
    });
  });

  it('should be created', inject([ReserveBookService], (service: ReserveBookService) => {
    expect(service).toBeTruthy();
  }));
});
