import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {restUrl} from '../config';
import {Observable} from 'rxjs';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount(accountId: number): Observable<Account> {
    return this.http.get<Account>(`${restUrl}/accounts/${accountId}`);
  }

  deleteAccount(accountId: number) {
    return this.http.delete(`${restUrl}/accounts/${accountId}`);
  }

  patchUserNameAndEmailAddress(accountId: number, username: string, emailAddress: string) {
    const patch = [
      {op: 'replace', path: '/username', value: username},
      {op: 'replace', path: '/emailAddress', value: emailAddress}
    ];
    return this.http.patch(`${restUrl}/accounts/${accountId}`, JSON.stringify(patch));
  }

  patchPassword(accountId: number, currentPassword: string, newPassword: string) {
    const patch = [
      {op: 'replace', path: '/password', value: newPassword}
    ];
    const params = new HttpParams().set('currentPassword', currentPassword);
    return this.http.patch(`${restUrl}/accounts/${accountId}`, JSON.stringify(patch), { params });
  }
}
