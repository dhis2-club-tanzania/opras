import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  teachingStaffObjectives,
  attributes,
} from 'src/app/pages/planning/pages/view-group/objectives';

@Component({
  selector: 'annual-review',
  templateUrl: './annual-review.component.html',
  styleUrls: ['./annual-review.component.css'],
})
export class AnnualReviewComponent implements OnInit {
  objectives;
  attributes;
  rateControl;
  formControl;

  constructor() {}

  ngOnInit(): void {
    this.objectives = teachingStaffObjectives;
    this.attributes = attributes;
    this.rateControl = new FormControl('', [
      Validators.min(1),
      Validators.max(5),
    ]);
    this.formControl = new FormGroup({ rateControl: this.rateControl });
  }
}
