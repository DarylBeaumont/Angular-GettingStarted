import { TestBed } from '@angular/core/testing';

import { ProductExplanationGuard } from './product-explanation.guard';

describe('ProductExplanationGuard', () => {
  let guard: ProductExplanationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductExplanationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
