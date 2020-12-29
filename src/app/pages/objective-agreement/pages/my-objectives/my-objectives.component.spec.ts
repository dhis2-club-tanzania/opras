import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyObjectivesComponent } from './my-objectives.component';

describe('MyObjectivesComponent', () => {
  let component: MyObjectivesComponent;
  let fixture: ComponentFixture<MyObjectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
