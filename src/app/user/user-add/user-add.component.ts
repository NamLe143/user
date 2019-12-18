import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit, OnChanges {
  listUser = [];
  user = {
    name: '',
    age: null,
    address: '',
    gender: '',
  };
  @Output() displayUser = new EventEmitter();
  @Input() power: {};
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.user = changes.power.currentValue ? changes.power.currentValue : '';
  }
  ngOnInit() {
  }
  
  userAdd() {    
    this.listUser.push(JSON.parse(JSON.stringify(this.user)));
    this.displayUser.emit(this.listUser);
  }
}
