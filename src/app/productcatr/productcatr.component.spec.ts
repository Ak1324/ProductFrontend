import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatrComponent } from './productcatr.component';

describe('ProductcatrComponent', () => {
  let component: ProductcatrComponent;
  let fixture: ComponentFixture<ProductcatrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcatrComponent]
    });
    fixture = TestBed.createComponent(ProductcatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
