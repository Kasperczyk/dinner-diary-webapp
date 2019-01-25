import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../services/account.service';
import {AuthenticationService} from '../../../../services/authentication.service';
import {Account} from '../../../../models/account';

@Component({
  selector: 'dd-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account = <Account>{};

  constructor(private accountService: AccountService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.accountService.getAccount(this.authenticationService.currentUser.id)
      .subscribe(account => {
        this.account = account;
      });
  }
}
