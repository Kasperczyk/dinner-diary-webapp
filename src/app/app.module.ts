import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/security/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutes} from './app.routes';
import {RegisterComponent} from './components/security/register/register.component';
import {PasswordResetComponent} from './components/security/password-reset/password-reset.component';
import {AuthInterceptor} from './security/auth-interceptor.service';
import {ErrorInterceptor} from './error/error.interceptor';
import {MenusComponent} from './components/menus/menus.component';
import {MatchPasswordDirective} from './validators/match-password.directive';
import {AccountComponent} from './components/account/account/account/account.component';
import {StatsComponent} from './components/account/stats/stats.component';
import {MessagesComponent} from './components/account/messages/messages.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {AboutComponent} from './components/info/about/about.component';
import {HelpComponent} from './components/info/help/help.component';
import {ImprintComponent} from './components/info/imprint/imprint.component';
import {AccountSettingsComponent} from './components/account/account/account-settings/account-settings.component';
import {PasswordSettingsComponent} from './components/account/account/password-settings/password-settings.component';
import {DeleteAccountComponent} from './components/account/account/delete-account/delete-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    MenusComponent,
    MatchPasswordDirective,
    AccountComponent,
    StatsComponent,
    MessagesComponent,
    RecipesComponent,
    AboutComponent,
    HelpComponent,
    ImprintComponent,
    AccountSettingsComponent,
    PasswordSettingsComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
