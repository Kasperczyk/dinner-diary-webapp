import {Component, ViewChild} from '@angular/core';
import {AccountService} from '../../../../services/account.service';
import {AuthenticationService} from '../../../../services/authentication.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'dd-password-settings',
  templateUrl: './password-settings.component.html',
  styleUrls: ['./password-settings.component.css']
})
export class PasswordSettingsComponent {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  showSuccessAlert = false;
  isWrongPassword = false;
  @ViewChild('form') passwordForm: NgForm;

  constructor(private accountService: AccountService,
              private authenticationService: AuthenticationService) { }

  patchPassword() {
    this.accountService.patchPassword(this.authenticationService.currentUser.id, this.currentPassword, this.newPassword)
      .subscribe(() => {
        this.showSuccessAlert = true;
      }, () => {
        this.isWrongPassword = true;
      });
  }

  resetPasswords() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
    this.hideAlerts();
    this.passwordForm.form.markAsPristine();
    this.passwordForm.form.markAsUntouched();
  }

  hideAlerts() {
    this.showSuccessAlert = false;
    this.isWrongPassword = false;
  }
}
