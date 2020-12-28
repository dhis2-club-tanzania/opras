import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DepartmentDashboardComponent } from './department-dashboard.component';

describe('DepartmentDashboardComponent', () => {
  let component: DepartmentDashboardComponent;
  let fixture: ComponentFixture<DepartmentDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
