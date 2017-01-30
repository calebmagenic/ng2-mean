import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor() { }

  title: string = "NG2 MEAN: TODO";
  theme: string = "default-mono-theme";

  ngOnInit() {
  }

}
