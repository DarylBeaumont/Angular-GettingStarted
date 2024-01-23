import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExplanationComponent } from './product-explanation.component';

describe('ProductExplanationComponent', () => {
  let component: ProductExplanationComponent;
  let fixture: ComponentFixture<ProductExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
