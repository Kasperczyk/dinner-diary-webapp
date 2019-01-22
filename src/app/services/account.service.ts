import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {restUrl} from '../config';
import {Observable} from 'rxjs';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${restUrl}/accounts/${id}`);
  }
}
