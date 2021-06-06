import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sections = [
    { name: 'PERSONAL INFORMATION', link: 'section1' },
    { name: 'PERFORMANCE AGREEMENT', link: 'section2' },
    { name: 'MID-YEAR REVIEW', link: 'section3' },
    { name: 'REVISED OBJECTIVES', link: 'section4' },
    { name: 'ANNUAL PERFORMANCE REVIEW & APPRAISAL', link: 'section5' },
    { name: 'ATTRIBUTES OF GOOD PERFORMANCE', link: 'section6' },
    { name: 'OVERALL PERFORMANCE', link: 'section7' },
    {
      name: 'EMPLOYEE REWARDS/ DEVELOPMENTAL MEASURES/ SANCTIONS',
      link: 'section8',
    },
  ];
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('OPRAS - Dashboard');
  }
}
