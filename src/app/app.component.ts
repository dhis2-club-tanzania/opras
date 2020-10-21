import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Fn } from '@iapps/function-analytics';
import { MatDialog } from '@angular/material/dialog';

import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    public dialog: MatDialog
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    // Set application title
    this.setTitle('OPRAS');

    if (Fn) {
      Fn.init({
        baseUrl: '../../../',
      });
    }
  }
  ngOnInit(): void {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  openMenu() {
    this.trigger.openMenu();
  }
}
