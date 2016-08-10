import { Component } from '@angular/core';
import { Widget } from '../core/widget/widget.directive';

@Component({
  selector  : 'dashboard',
  template  : require('./dashboard.component.html'),
  directives: [ Widget ]
})

export class DashboardComponent {
}
