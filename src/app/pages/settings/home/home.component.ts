import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tabs = [
    { name: 'General Settings', link: 'general' },
    { name: 'Profile Settings', link: 'profile' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
