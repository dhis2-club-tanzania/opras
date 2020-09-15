import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sections = [
    { name: 'SECTION 1', link: '' },
    { name: 'SECTION 2', link: '' },
    { name: 'SECTION 3', link: '' },
    { name: 'SECTION 4', link: '' },
    { name: 'SECTION 5', link: '' },
    { name: 'SECTION 6', link: '' },
    { name: 'SECTION 7', link: '' },
    { name: 'SECTION 8', link: '' },
  ];
  constructor() {}

  ngOnInit() {}
}
