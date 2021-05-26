import { TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.service';

describe('AlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertComponent = TestBed.get(AlertComponent);
    expect(service).toBeTruthy();
  });
});
