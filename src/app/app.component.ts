import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {ClarityIcons} from '@clr/icons';

import '@clr/icons';
import '@clr/icons/shapes/commerce-shapes';
import '@clr/icons/shapes/essential-shapes';
import '@clr/icons/shapes/media-shapes';
import '@clr/icons/shapes/social-shapes';
import '@clr/icons/shapes/travel-shapes';
import '@clr/icons/shapes/chart-shapes';
import '@clr/icons/shapes/text-edit-shapes';
import '@clr/icons/shapes/technology-shapes';
import {Account} from './models/account';
import {AccountService} from './services/account.service';
import {Router} from '@angular/router';
import {User} from './models/user';

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  account = <Account>{};

  constructor(private authenticationService: AuthenticationService,
              private accountService: AccountService,
              private router: Router) {
    ClarityIcons.add({'dd-logo': 'todo'}); // todo add logo
  }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      const id = (JSON.parse(localStorage.getItem('currentUser')) as User).id;
      this.getAccount(id);
    } else {
      this.authenticationService.successfulLoginEmitted
        .subscribe(id => {
          this.getAccount(id);
        });
    }
  }

  isActive(url: string) {
    return this.router.url === `/${url}`;
  }

  getAccount(id: number) {
    this.accountService.getAccount(id)
      .subscribe(value => {
        this.account = value;
      });
  }

  userIsLoggedIn() {
    return this.authenticationService.isUserLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
  }
}
