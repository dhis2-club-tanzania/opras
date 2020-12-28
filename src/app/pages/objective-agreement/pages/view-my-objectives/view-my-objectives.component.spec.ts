import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewMyObjectivesComponent } from './view-my-objectives.component';

describe('ViewMyObjectivesComponent', () => {
  let component: ViewMyObjectivesComponent;
  let fixture: ComponentFixture<ViewMyObjectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
