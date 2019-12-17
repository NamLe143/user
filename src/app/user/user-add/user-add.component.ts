import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  listUser = [];
  user = {
    name: '',
    age: null,
    address: '',
    gender: '',
  };
  @Output() displayUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  userAdd() {
    this.listUser.push(JSON.parse(JSON.stringify(this.user)));
    this.displayUser.emit(this.listUser);
  }
}
