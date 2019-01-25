import {Component} from '@angular/core';
import {AccountService} from '../../../../services/account.service';
import {AuthenticationService} from '../../../../services/authentication.service';

@Component({
  selector: 'dd-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  isDeletionConfirmed = false;

  constructor(private accountService: AccountService,
              private authenticationService: AuthenticationService) { }

  deleteAccount() {
    this.accountService.deleteAccount(this.authenticationService.currentUser.id)
      .subscribe(() => {
        this.authenticationService.logout();
      });
  }

  resetIsDeletionConfirmed() {
    this.isDeletionConfirmed = false;
  }
}
