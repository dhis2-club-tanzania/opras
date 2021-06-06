import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var particlesJS: any;

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('OPRAS Error');
    particlesJS.load('particles-js', '/assets/particles.json', null);
  }
}
