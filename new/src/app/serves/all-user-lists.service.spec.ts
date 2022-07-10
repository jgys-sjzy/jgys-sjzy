import { TestBed } from '@angular/core/testing';

import { AllUserListsService } from './all-user-lists.service';

describe('AllUserListsService', () => {
  let service: AllUserListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUserListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
