import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewStaffReviewComponent } from './view-staff-review.component';

describe('ViewStaffReviewComponent', () => {
  let component: ViewStaffReviewComponent;
  let fixture: ComponentFixture<ViewStaffReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStaffReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
