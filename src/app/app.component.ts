import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Fn } from '@iapps/function-analytics';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contexts = [
    { id: 'instructor', name: 'Instructor' },
    { id: 'hod', name: 'Head of Department' },
  ];
  periods = [
    { id: 'wwse', name: '22019/2020' },
    { id: 'gshs', name: '2020/2021' },
  ];
  selectedContext = this.contexts[0].id;
  selectedPeriod = this.periods[1].id;
  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private router: Router,
    private snackBar: MatSnackBar
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
  ngOnInit(): void {
    this.selectContext();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  selectContext() {
    console.log(this.selectedContext);

    this.router.navigate([this.selectedContext]);
  }
  selectPeriod() {
    this.snackBar.open('UNDER CONSTRUCTION, COMING SOON...', 'OK', {
      duration: 3000,
    });
  }
}
