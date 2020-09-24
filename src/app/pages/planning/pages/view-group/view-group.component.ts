import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css'],
})
export class ViewGroupComponent implements OnInit {
  teachingStaffObjectives = [
    { name: 'Teaching', applicable: true },
    { name: 'Research', applicable: false },
  ];
  ApplicableStaffObjectives = [];

  displayedColumns: string[] = ['sno', 'objective', 'actions'];
  dataSource = new MatTableDataSource(this.teachingStaffObjectives);

  // @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
  }
}
