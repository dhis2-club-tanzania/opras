import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

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

  displayedColumns: string[] = [
    'sno',
    'objective',
    'last-modified',
    'applicable',
    'actions',
  ];
  dataSource;
  canAddAll: Boolean;
  canRemoveAll: Boolean;
  constructor(private _snackBar: MatSnackBar) {}

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
    this._snackBar.open('You cannot add new objective at a moment', 'X', {
      duration: 3000,
      horizontalPosition: 'left',
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
  objectiveDobleClick() {
    this._snackBar.open('Umedouble_click Objective yangu...', 'X', {
      duration: 3000,
      horizontalPosition: 'left',
    });
  }
}
