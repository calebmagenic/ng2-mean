import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpServiceConfig } from './http/http.service.config';
import { HttpService } from './http/http.service';

import { HeaderComponent } from './header/header.component';

import { TodoModule } from '../todo/todo.module';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  imports: [
    CommonModule,
    TodoModule
  ],
  declarations: [HeaderComponent, ThemeComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
