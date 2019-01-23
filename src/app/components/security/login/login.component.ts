import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'dd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailAddress: string;
  password: string;
  isInvalidCredentials: boolean;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    const emailAddress = sessionStorage.getItem('login#emailAddress');
    if (emailAddress) {
      this.emailAddress = emailAddress;
      this.passwordInput.nativeElement.focus();
      sessionStorage.removeItem('login#emailAddress');
    } else {
      this.emailInput.nativeElement.focus();
    }
  }

  login() {
    this.authenticationService.login(this.emailAddress, this.password)
      .subscribe(response => {
        // todo using localStorage is probably not the safest way to do this -> use a cryptographically signed cookie
        // see https://dev.to/rdegges/please-stop-using-local-storage-1i04
        const token = response.headers.get('Authorization').split('Bearer ')[1];
        const user: User = {emailAddress: this.emailAddress, id: response.body, token: token};
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigateByUrl('/menus');
        this.isInvalidCredentials = false;
      }, () => {
        this.isInvalidCredentials = true;
      });
  }

  resetForm() {
    this.emailInput.nativeElement.focus();
    this.isInvalidCredentials = false;
  }
}
