import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo$: any = {};
  constructor(
    private userService: UserService,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userService.getUserDeatils().subscribe(
      (userInfo) => {
        this.userInfo$ = userInfo;
        console.log(this.userInfo$);
      },
      (err) => {
        this._snackbar.open(
          'Failed to fetch user info because ' + err.message,
          'OK',
          {
            duration: 3000,
            horizontalPosition: 'left',
          }
        );
        console.log(err);
      }
    );
  }
}
