import { Component, OnInit } from '@angular/core';

import { Theme, ThemeSelection } from './core/theme/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor() { }

  title: string;
  theme: string;
  themes: Theme[];

  ngOnInit() {
    this.themes = [];
    this.theme = "theme mono grey";
    this.title = "NG2 MEAN: TODO";
    this.addTheme('mono', ['grey','blue', 'purple', 'red', 'brown', 'orange', 'green']);
  }

  addTheme(style: String, colors: String[]) {
    this.themes.push(new Theme(style, colors));
  }

  handleThemeChanged(theme: ThemeSelection) {
    this.theme = `theme ${theme.name} ${theme.color}`;
  }

}
