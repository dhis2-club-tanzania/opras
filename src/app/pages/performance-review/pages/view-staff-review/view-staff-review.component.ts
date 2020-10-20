import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { staff } from 'src/app/pages/objective-agreement/pages/view-staff-objective/staff';

@Component({
  selector: 'view-staff-review',
  templateUrl: './view-staff-review.component.html',
  styleUrls: ['./view-staff-review.component.css'],
})
export class ViewStaffReviewComponent implements OnInit {
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
    this.router.navigate(['performance-review/staff-review/view-staff']);
    this._snackBar.open('Viewing Someone', 'X', {
      duration: 3000,
      horizontalPosition: 'left',
    });
  }
}
