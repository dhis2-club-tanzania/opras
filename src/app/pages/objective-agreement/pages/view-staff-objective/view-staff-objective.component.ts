import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// data
import { staff } from './staff';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'view-staff-objective',
  templateUrl: './view-staff-objective.component.html',
  styleUrls: ['./view-staff-objective.component.css'],
})
export class ViewStaffObjectiveComponent implements OnInit, AfterViewInit {
  staffList = [];
  dataSource;
  displayedColumns: string[] = ['position', 'name', 'last-modified', 'actions'];

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.staffList = staff;
    this.dataSource = new MatTableDataSource(this.staffList);
  }
  ngOnChanges(): void {
    this.staffList = staff;
    this.dataSource = new MatTableDataSource(this.staffList);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'last-modified': {
          let newDate = new Date(item.form.lastModified);
          return newDate;
        }
        default: {
          return item[property];
        }
      }
    };
  }
  viewStaff() {
    this.router.navigate(['objectives-agreement/staff-objectives/view-staff']);
    this._snackBar.open('Viewing Someone', 'X', {
      duration: 3000,
      horizontalPosition: 'left',
    });
  }
}
