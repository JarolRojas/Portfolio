import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../../interfaces/project/account';

@Injectable({
  providedIn: 'root'
})
export class AccountGithubService {
  private apiUrl = 'https://api.github.com/users/JarolRojas';

  constructor(private http: HttpClient) { }

  getAccount(): Observable<Account> {
    return this.http.get<Account>(this.apiUrl);
  }
}
