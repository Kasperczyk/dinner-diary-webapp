import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/security/login/login.component';
import {RegisterComponent} from './components/security/register/register.component';
import {MenusComponent} from './components/menus/menus.component';
import {AuthGuard} from './security/auth.guard';
import {AccountComponent} from './components/account/account/account.component';
import {StatsComponent} from './components/account/stats/stats.component';
import {MessagesComponent} from './components/account/messages/messages.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {AboutComponent} from './components/info/about/about.component';
import {HelpComponent} from './components/info/help/help.component';
import {ImprintComponent} from './components/info/imprint/imprint.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menus',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menus',
    component: MenusComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'help',
    component: HelpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'imprint',
    component: ImprintComponent,
    canActivate: [AuthGuard]
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
