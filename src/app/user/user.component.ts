import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isActive = false;
  listUser = [];
  constructor() {
  }
  ngOnInit() {
  }
  viewUser($event) {
    if ($event && $event.length) {
      this.isActive = true;
      this.listUser = $event
    }
  }

}
