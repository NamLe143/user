import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit, OnChanges {
  listUser = [];
  user = {
    id: null,
    name: '',
    age: null,
    address: '',
    gender: '',
  };
  actionEdit = false;
  actionDelete = false;
  @Output() displayUser = new EventEmitter();
  @Input() newUser: {};
  @Input() detectEdit: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.user = changes.newUser.currentValue ? changes.newUser.currentValue : '';
    this.actionEdit = true ? changes.detectEdit.currentValue : false;
  }
  ngOnInit() {
  }
  submit() {
    if (this.actionEdit) {
      this.displayUser.emit(this.user);
      this.actionEdit = false;
    } else {

      this.user.id = this.listUser.length ? this.listUser[this.listUser.length - 1].id + 1 : 1;
      this.listUser.push(this.user);
      this.displayUser.emit(this.listUser);
    }
    this.user = {
      id: null,
      name: '',
      age: null,
      address: '',
      gender: '',
    };
  }
}
