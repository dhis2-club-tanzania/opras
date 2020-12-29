import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Objective } from '../../shared/objective';
import { AddNewObjectiveComponent } from '../add-new-objective/add-new-objective.component';

import {
  teachingStaffObjectives,
  administrativeStaffObjectives,
} from './objectives';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css'],
})
export class ViewGroupComponent implements OnInit {
  @Input() groupState: number;
  dataSource: Objective[];
  canAddAll: Boolean;
  canRemoveAll: Boolean;
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.groupState == 0
      ? (this.dataSource = teachingStaffObjectives)
      : (this.dataSource = administrativeStaffObjectives);
    this.addOrRemoveAll();
  }
  addOrRemoveAll() {
    this.canAddAll = this.canRemoveAll = false;
    for (let i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i].applicable
        ? (this.canRemoveAll = true)
        : (this.canAddAll = true);
    }
  }
  addToPlan(index: number) {
    this.dataSource[index].applicable = true;
    this._snackBar.open(
      this.dataSource[index].name + ' added to plan successfully',
      'X',
      { duration: 3000, horizontalPosition: 'left' }
    );
    this.addOrRemoveAll();
  }
  removeFromPlan(index: number) {
    this.dataSource[index].applicable = false;
    this._snackBar.open(
      this.dataSource[index].name + ' removed from plan successfully',
      'X',
      {
        duration: 3000,
        horizontalPosition: 'left',
      }
    );
    this.addOrRemoveAll();
  }
  onAddNew() {
    const dialogRef = this.dialog.open(AddNewObjectiveComponent, {
      width: '60%',
      disableClose: true,
      data: { title: 'Add New Objective', objective: {} },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'cancel') {
        this._snackBar.open('Adding objective dismissed ', 'OK', {
          duration: 3000,
          horizontalPosition: 'left',
        });
      } else {
        this.dataSource.push(result);
        this._snackBar.open('New Objective Added Successfully ', 'OK', {
          duration: 3000,
          horizontalPosition: 'left',
        });
      }
    });
    this.addOrRemoveAll();
  }
  onAddAll() {
    for (let i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i].applicable = true;
    }
    this._snackBar.open('All Objectives were added to plan successfully', 'X', {
      duration: 3000,
      horizontalPosition: 'left',
    });
    this.addOrRemoveAll();
  }
  onRemoveAll() {
    for (let i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i].applicable = false;
    }
    this._snackBar.open(
      'All Objectives were removed from plan successfully',
      'X',
      {
        duration: 3000,
        horizontalPosition: 'left',
      }
    );
    this.addOrRemoveAll();
  }
  objectiveDobleClick(index: number) {
    this.editObjective(index);
  }

  editObjective(index: number) {
    const dialogRef = this.dialog.open(AddNewObjectiveComponent, {
      width: '60%',
      disableClose: true,
      data: {
        title: 'Edit ' + this.dataSource[index].name + ' Objective',
        objective: this.dataSource[index],
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'cancel') {
        this._snackBar.open(
          'Editing ' + this.dataSource[index].name + ' dismissed ',
          'OK',
          {
            duration: 3000,
            horizontalPosition: 'left',
          }
        );
      } else {
        this.dataSource[index].name = result.name;
        this.dataSource[index].description = result.description;
        this._snackBar.open(
          this.dataSource[index].name + ' objective edited successfully ',
          'OK',
          {
            duration: 3000,
            horizontalPosition: 'left',
          }
        );
      }
    });
  }
}
