import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-staff-objectives',
  templateUrl: './staff-objectives.component.html',
  styleUrls: ['./staff-objectives.component.css'],
})
export class StaffObjectivesComponent implements OnInit {
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('OPRAS - Staff Objectives');
  }
}
