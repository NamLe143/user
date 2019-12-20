import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isActive = false;
  listUser = [];
  userCurrent = {};
  isEdit = null;
  constructor() {
  }
  ngOnInit() {
  }
  viewUser($event) {
    if (this.isEdit) {
      this.listUser.forEach((item, index) => {
          this.listUser[index] = item.id === $event.id ? $event : this.listUser[index];
      });
    } else {
        this.isActive = $event && $event.length ? true : false;
        this.listUser = $event && $event.length ? $event : '';
    }
  }
  editUser(user) {
    this.isEdit += 1 ;
    this.userCurrent = JSON.parse(JSON.stringify(user));
  }
  deleteUser(user) {
    this.listUser.forEach((val, index) => {
      if (val.id === user.id) {
        this.listUser.splice(index, 1);
      }
    });
  }

}
