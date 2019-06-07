import { TestBed } from '@angular/core/testing';

import { DataWpService } from './data-wp.service';

describe('DataWpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataWpService = TestBed.get(DataWpService);
    expect(service).toBeTruthy();
  });
});
