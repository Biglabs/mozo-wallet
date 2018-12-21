import { TestBed } from '@angular/core/testing';

import { MozoService } from './mozo.service';

describe('MozoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MozoService = TestBed.get(MozoService);
    expect(service).toBeTruthy();
  });
});
