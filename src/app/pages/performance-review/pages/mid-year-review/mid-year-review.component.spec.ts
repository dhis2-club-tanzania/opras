import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MidYearReviewComponent } from './mid-year-review.component';

describe('MidYearReviewComponent', () => {
  let component: MidYearReviewComponent;
  let fixture: ComponentFixture<MidYearReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MidYearReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidYearReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
