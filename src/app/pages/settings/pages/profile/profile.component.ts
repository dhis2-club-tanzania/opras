import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userInfo = this.userService.getUserDeatils();
    console.log(this.userInfo);
  }
}
