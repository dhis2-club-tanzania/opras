import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffReviewComponent } from './staff-review.component';

describe('StaffReviewComponent', () => {
  let component: StaffReviewComponent;
  let fixture: ComponentFixture<StaffReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
