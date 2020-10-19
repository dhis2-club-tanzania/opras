import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { teachingStaffObjectives } from 'src/app/pages/planning/pages/view-group/objectives';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'mid-year-review',
  templateUrl: './mid-year-review.component.html',
  styleUrls: ['./mid-year-review.component.css'],
})
export class MidYearReviewComponent implements OnInit {
  objectives;
  displayedColumns = [
    'sno',
    'progress-towards-target',
    'factor-affecting-performance',
  ];
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.objectives = teachingStaffObjectives;
  }
  addAgreement(index: number) {
    const dialogRef = this.dialog.open(AddReviewComponent, {
      width: '60%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'cancel') {
        this._snackBar.open('Adding Review dismissed ', 'OK', {
          duration: 3000,
          horizontalPosition: 'left',
        });
      } else {
        if (!this.objectives[index].review) {
          this.objectives[index].review = [];
        }
        this.objectives[index].review.push(result);
        this._snackBar.open(
          'New review added to ' + this.objectives[index].name + ' objective',
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
