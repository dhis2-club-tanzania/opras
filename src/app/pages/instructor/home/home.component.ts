import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sections = [
    { name: 'SECTION 1', link: '' },
    { name: 'SECTION 2', link: 'section2' },
    { name: 'SECTION 3', link: 'section3' },
    { name: 'SECTION 4', link: 'section3' },
    { name: 'SECTION 5', link: 'section5' },
    { name: 'SECTION 6', link: 'section6' },
    { name: 'SECTION 7', link: 'section7' },
    { name: 'SECTION 8', link: 'section8' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
