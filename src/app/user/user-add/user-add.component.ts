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
  @Output() displayUser = new EventEmitter();
  @Input() newUser: {};
  @Input() detectEdit: {};
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.user = changes.newUser.currentValue ? changes.newUser.currentValue : '';
    this.actionEdit = changes.detectEdit.currentValue ? changes.detectEdit.currentValue : false;
  }
  ngOnInit() {
  }
  
  submit() {
    if (this.actionEdit) {
      this.displayUser.emit(this.user);
    } else {
      this.user.id = this.listUser.length + 1;
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
