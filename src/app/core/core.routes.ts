import { provideRouter, RouterConfig } from '@angular/router';
import { CoreComponent } from './core.component';
import { AnotherComponent } from '../another/another.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const CoreRoutes: RouterConfig = [
  {
    path     : 'app',
    component: CoreComponent,
    children : [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'another-page', component: AnotherComponent }
    ]
  }
];
