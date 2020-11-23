import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Objective } from 'src/app/pages/planning/shared/objective';

import { teachingStaffObjectives } from '../../../planning/pages/view-group/objectives';
import { AddAgreementComponent } from '../add-agreement/add-agreement.component';

@Component({
  selector: 'app-my-objectives',
  templateUrl: './my-objectives.component.html',
  styleUrls: ['./my-objectives.component.css'],
})
export class MyObjectivesComponent implements OnInit {
  objectives: Objective[];
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
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'cancel') {
        this._snackBar.open('Adding agreement dismissed ', 'OK', {
          duration: 3000,
          horizontalPosition: 'left',
        });
      } else {
        if (!this.objectives[index].agreements) {
          this.objectives[index].agreements = [];
        }
        this.objectives[index].agreements.push(result);
        this._snackBar.open(
          'New agreement added to ' +
            this.objectives[index].name +
            ' objective',
          'X',
          {
            duration: 3000,
            horizontalPosition: 'left',
          }
        );
      }
    });
  }
}
