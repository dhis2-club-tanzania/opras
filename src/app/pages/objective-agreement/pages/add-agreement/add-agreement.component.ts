import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-agreement',
  templateUrl: './add-agreement.component.html',
  styleUrls: ['./add-agreement.component.css'],
})
export class AddAgreementComponent implements OnInit {
  canAddAgreement: Boolean = false;
  agreement = { target: '', criteria: '', resource: '' };

  constructor(
    public dialogRef: MatDialogRef<AddAgreementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }
  addAgreementToggle() {
    if (
      this.agreement.target.length == 0 ||
      this.agreement.criteria.length == 0
    ) {
    } else this.canAddAgreement = true;
  }
}
