import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
declare var jQuery: any;

@Component({
  selector     : 'body',
  directives   : [ ROUTER_DIRECTIVES ],
  template     : require('./app.compnent.html'),
  styles       : [ require('./../scss/application.scss') ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
