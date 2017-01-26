import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-state-menu',
  templateUrl: './todo-state-menu.component.html',
  styleUrls: ['./todo-state-menu.component.less']
})
export class TodoStateMenuComponent implements OnInit {

  constructor() { }

  @Output()
  onToggle = new EventEmitter<Boolean>();

  @Output()
  onCreate = new EventEmitter();

  showActive: Boolean = true;

  ngOnInit() {
  }

  toggle(showActive: Boolean) {
    this.onToggle.emit(showActive);
    this.showActive = showActive;
  }

  createNew() {
    this.onCreate.emit();
  }

}
