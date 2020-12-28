import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffObjectivesComponent } from './staff-objectives.component';

describe('StaffObjectivesComponent', () => {
  let component: StaffObjectivesComponent;
  let fixture: ComponentFixture<StaffObjectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
