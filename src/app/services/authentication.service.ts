import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../models/account';
import {restUrl} from '../config';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private emitSuccessfulLogin = new Subject<any>();
  successfulLoginEmitted = this.emitSuccessfulLogin.asObservable();

  constructor(private http: HttpClient,
              private router: Router) { }

  register(account: Account) {
    return this.http.post(`${restUrl}/accounts`, account);
  }

  login(emailAddress: string, password: string) {
    const account: Account = {
      id: null,
      username: null,
      emailAddress: emailAddress,
      password: password,
      lastLoginTimestamp: null
    };
    return this.http.post<number>(`${restUrl}/login`, account, {observe: 'response'});
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

  isUserLoggedIn() {
    return localStorage.getItem('currentUser') != null ;
  }

  emitSuccessfulLoginEvent(id: number) {
    this.emitSuccessfulLogin.next(id);
  }
}
