import {Component, Input, OnChanges} from '@angular/core';
import {Account} from '../../../../models/account';
import {AccountService} from '../../../../services/account.service';
import {AuthenticationService} from '../../../../services/authentication.service';

@Component({
  selector: 'dd-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnChanges {
  @Input() account = <Account>{};
  emailAddress: string;
  username: string;
  showSuccessAlert = false;
  isEmailAddressAlreadyInUse = false;

  constructor(private accountService: AccountService,
              private authenticationService: AuthenticationService) { }

  ngOnChanges() {
    this.username = this.account.username;
    this.emailAddress = this.account.emailAddress;
  }

  patchUsernameAndEmailAddress() {
    this.accountService.patchUserNameAndEmailAddress(this.authenticationService.currentUser.id, this.username, this.emailAddress)
      .subscribe(() => {
        this.showSuccessAlert = true;
        this.account.username = this.username;
        this.account.emailAddress = this.emailAddress;
        this.authenticationService.emitLoadAccountEvent();
      }, () => {
        this.isEmailAddressAlreadyInUse = true;
      });
  }

  resetUsernameAndEmailAddress() {
    this.username = this.account.username;
    this.emailAddress = this.account.emailAddress;
    this.hideAlerts();
  }

  hideAlerts() {
    this.showSuccessAlert = false;
    this.isEmailAddressAlreadyInUse = false;
  }
}
