import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { teachingStaffObjectives } from '../../../planning/pages/view-group/objectives';
import { AddAgreementComponent } from '../add-agreement/add-agreement.component';

@Component({
  selector: 'app-my-objectives',
  templateUrl: './my-objectives.component.html',
  styleUrls: ['./my-objectives.component.css'],
})
export class MyObjectivesComponent implements OnInit {
  objectives;
  displayedColumns = [
    'sno',
    'agreed-performance-targets',
    'agreed-perfromance-criteria',
    'agreed-resources',
  ];
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.objectives = teachingStaffObjectives;
  }
  addAgreement(index: number) {
    const dialogRef = this.dialog.open(AddAgreementComponent, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!this.objectives[index].agreements) {
        this.objectives[index].agreements=[]
      }
      this.objectives[index].agreements.push(result);
      if(!(result.target,length==0))this._snackBar.open(
        'New agreement added to ' + this.objectives[index].name + ' objective',
        'X',
        {
          duration: 3000,
          horizontalPosition: 'left',
        }
      );
    });
  }
}
