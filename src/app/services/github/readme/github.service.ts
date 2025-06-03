import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private username = 'JarolRojas';
  private repo = 'JarolRojas';
  private apiUrl = `https://api.github.com/repos/${this.username}/${this.repo}/readme`;

  constructor(private http: HttpClient) {}

  getReadme(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
