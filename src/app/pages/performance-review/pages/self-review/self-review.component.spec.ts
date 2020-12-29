import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelfReviewComponent } from './self-review.component';

describe('SelfReviewComponent', () => {
  let component: SelfReviewComponent;
  let fixture: ComponentFixture<SelfReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
