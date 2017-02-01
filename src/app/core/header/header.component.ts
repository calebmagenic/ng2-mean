import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Theme, ThemeSelection } from '../theme/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input()
  text: String;

  @Input()
  themes: Theme[];

  @Output()
  onThemeChanged: EventEmitter<ThemeSelection> = new EventEmitter<ThemeSelection>();

  constructor() { }

  ngOnInit() {
  }

  handleThemeChanged(theme: ThemeSelection) {
    this.onThemeChanged.emit(theme); // simply push it along..
  }

}
