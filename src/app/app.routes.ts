import { provideRouter, RouterConfig } from '@angular/router';
import { CoreRoutes } from './core/core.routes';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: RouterConfig = [
  ...CoreRoutes,
  { path: 'error', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  {
    path      : '',
    redirectTo: '/app/dashboard',
    pathMatch : 'full'
  },
  { path: '**', redirectTo: '/app/dashboard' },
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
