import { Component, OnInit, Input } from '@angular/core';

import { Theme } from './theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  @Input()
  themes: Theme[];

  ngOnInit() {
  }

}
