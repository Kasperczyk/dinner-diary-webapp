import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutes} from './app.routes';
import {RegisterComponent} from './components/register/register.component';
import {PasswordResetComponent} from './components/password-reset/password-reset.component';
import {AuthInterceptor} from './security/auth-interceptor.service';
import {ErrorInterceptor} from './error/error.interceptor';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatchPasswordDirective} from './validators/match-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    DashboardComponent,
    MatchPasswordDirective
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
