import {Component} from '@angular/core';
import {Account} from '../../../models/account';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'dd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  account = <Account>{};
  confirmPassword: string;
  isEmailAddressAlreadyInUse: boolean;
  isSuccessfullyRegistered: boolean;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  register() {
    if (this.account.username == null || this.account.username === '') {
      this.account.username = this.account.emailAddress;
    }
    this.authenticationService.register(this.account).subscribe(() => {
      this.isEmailAddressAlreadyInUse = false;
      this.isSuccessfullyRegistered = true;
    }, (() => {
      if (this.account.username === this.account.emailAddress) {
        this.account.username = '';
      }
      this.isEmailAddressAlreadyInUse = true;
      this.isSuccessfullyRegistered = false;
    }));
  }

  navigateToLogin() {
    sessionStorage.setItem('login#emailAddress', this.account.emailAddress);
    this.router.navigate(['/login']);
  }

  hideAlert() {
    if (this.isEmailAddressAlreadyInUse) {
      this.isEmailAddressAlreadyInUse = false;
    }
    if (this.isSuccessfullyRegistered) {
      this.isSuccessfullyRegistered = false;
    }
  }
}
