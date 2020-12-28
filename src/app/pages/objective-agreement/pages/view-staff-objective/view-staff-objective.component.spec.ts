import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewStaffObjectiveComponent } from './view-staff-objective.component';

describe('ViewStaffObjectiveComponent', () => {
  let component: ViewStaffObjectiveComponent;
  let fixture: ComponentFixture<ViewStaffObjectiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStaffObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
