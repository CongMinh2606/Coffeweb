import { TestBed } from '@angular/core/testing';

import { GuardsoffGuard } from './guardsoff.guard';

describe('GuardsoffGuard', () => {
  let guard: GuardsoffGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardsoffGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
