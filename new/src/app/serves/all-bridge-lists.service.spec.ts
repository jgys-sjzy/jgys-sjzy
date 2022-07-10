import { TestBed } from '@angular/core/testing';

import { AllBridgeListsService } from './all-bridge-lists.service';

describe('AllBridgeListsService', () => {
  let service: AllBridgeListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBridgeListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
