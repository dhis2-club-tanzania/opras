import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-objective',
  templateUrl: './add-new-objective.component.html',
  styleUrls: ['./add-new-objective.component.css'],
})
export class AddNewObjectiveComponent implements OnInit {
  objective = { name: '', description: '' };
  canAddObjective = false;

  constructor(
    public dialogRef: MatDialogRef<AddNewObjectiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.objective = data.objective;
  }

  ngOnInit(): void {}
  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }
  addObjectiveToggle() {
    if (this.objective.name.length == 0) {
    } else {
      this.canAddObjective = true;
    }
  }
}
