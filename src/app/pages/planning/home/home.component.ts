import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  groups = [
    { id: 'dffgdd', name: 'teaching staff' },
    { id: 'sauifdj', name: 'Administrative staff' },
  ];
  groupState = 0;
  constructor() {}

  ngOnInit(): void {}

  setGroupState(event) {
    this.groupState = event;
  }
}
