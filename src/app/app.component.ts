import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Fn } from '@iapps/function-analytics';
import { UserService } from './pages/settings/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from 'proxy-config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  baseUrl = config['/api'].target;
  userInfo: any = {};
  userDashboard: any = {};
  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private _userService: UserService,
    private _snackbar: MatSnackBar
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
    this._userService.getUserDeatils().subscribe(
      (userInfo) => (this.userInfo = userInfo),
      (err) =>
        this._snackbar.open(
          'Failed to fetch user info because ' + err.message,
          'OK',
          {
            duration: 3000,
            horizontalPosition: 'left',
          }
        )
    );
    this._userService.getUserDashboard().subscribe(
      (userDashboard) => (this.userDashboard = userDashboard),
      (err) =>
        this._snackbar.open(
          'Failed to fetch user dashboard info because ' + err.message,
          'OK',
          {
            duration: 3000,
            horizontalPosition: 'left',
          }
        )
    );
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  public external(url: String): void {
    window.open(this.baseUrl + '/' + url, 'blank');
  }
}
