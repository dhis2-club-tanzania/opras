import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  canReview: Boolean = false;
  review = { ptt: '', fap: '' };

  constructor(
    public dialogRef: MatDialogRef<AddReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }
  addReviewToggle() {
    if (this.review.ptt.length == 0 || this.review.fap.length == 0) {
    } else this.canReview = true;
  }
}
