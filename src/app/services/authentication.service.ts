import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../models/account';
import {restUrl} from '../config';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {User} from '../models/user';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private emitLoadAccount = new Subject<any>();
  loadAccountEmitted = this.emitLoadAccount.asObservable();

  get currentUser(): User {
    return (JSON.parse(localStorage.getItem('currentUser')) as User);
  }

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

  emitLoadAccountEvent() {
    this.emitLoadAccount.next(this.currentUser.id);
  }
}
