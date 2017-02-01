import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Theme, ThemeSelection } from './theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  @Input()
  themes: Theme[];

  @Output()
  onThemeChanged: EventEmitter<ThemeSelection> = new EventEmitter<ThemeSelection>();

  theme: Theme;
  color: String;

  ngOnInit() {
    if(this.themes && this.themes.length) {
      this.theme = this.themes[0]; //default to the first one
    } else {
      this.theme = new Theme('default', ['default']);
    }

    if(this.theme.colors && this.theme.colors.length) {
      this.color = this.theme.colors[0];
    } else {
      this.color = 'default';
    }
  }

  onChange(theme: Theme) {
    this.triggerThemeChanged();
  }

  triggerThemeChanged() {
    var selection = this.getThemeSelection();
    this.onThemeChanged.emit(selection);
  }

  getThemeSelection() {
    var selection = new ThemeSelection();
    selection.name = this.theme.name;
    selection.color = this.color;

    return selection;
  }

}
