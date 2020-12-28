import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddAgreementComponent } from './add-agreement.component';

describe('AddObjectiveComponent', () => {
  let component: AddAgreementComponent;
  let fixture: ComponentFixture<AddAgreementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
