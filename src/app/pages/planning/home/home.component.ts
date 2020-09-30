import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {}

  createNewGroup() {
    this.snackBar.open('This feature will be implemented soon', 'OK', {
      duration: 3000,
    });
  }
  viewGroup(index: number) {
    this.router.navigate(['planning/view-group']);
  }
  editGroup() {
    this.snackBar.open("We'll edit the group", 'OK', { duration: 3000 });
  }
  deleteGroup(index: number) {
    this.snackBar.open(
      "Nex time, we'll delete " + this.groups[index].name + ' permanently',
      'OK',
      { duration: 4000 }
    );
  }
  setGroupState(event) {
    console.log(event);
  }
}
