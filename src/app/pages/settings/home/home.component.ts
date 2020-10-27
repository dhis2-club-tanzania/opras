import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tabs = [
    { name: 'My Profile', link: '/settings/profile', icon: 'person' },
    { name: 'General Settings', link: '/settings/general', icon: 'settings' },
    { name: 'About OPRAS', link: '/settings/about', icon: 'info' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
