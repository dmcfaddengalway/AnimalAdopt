import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient.get<User[]>(this.baseUrl + '/users');
  }

  public getUser(idNumber: number) {
    return this.httpClient.get<User>(this.baseUrl + '/users/' + idNumber);
  }
}
