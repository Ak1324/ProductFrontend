import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackusrComponent } from './feedbackusr.component';

describe('FeedbackusrComponent', () => {
  let component: FeedbackusrComponent;
  let fixture: ComponentFixture<FeedbackusrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackusrComponent]
    });
    fixture = TestBed.createComponent(FeedbackusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
