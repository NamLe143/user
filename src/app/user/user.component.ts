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
  isEdit = false;
  constructor() {
  };
  ngOnInit() {
  };
  viewUser($event) {
    if (this.isEdit) {
      this.listUser.forEach((item, index) => {
          this.listUser[index] = item.id === $event.id ? $event : this.listUser[index];
      });
    } else {
        this.isActive = $event && $event.length ? true : false;
        this.listUser = $event && $event.length ? $event : '';
    };
  };
  editUser(user) {    
    this.isEdit = true;
    this.userCurrent = JSON.parse(JSON.stringify(user));
  }

}
