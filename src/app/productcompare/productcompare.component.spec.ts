import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcompareComponent } from './productcompare.component';

describe('ProductcompareComponent', () => {
  let component: ProductcompareComponent;
  let fixture: ComponentFixture<ProductcompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcompareComponent]
    });
    fixture = TestBed.createComponent(ProductcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
