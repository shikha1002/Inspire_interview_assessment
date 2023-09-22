import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://s3.amazonaws.com/api-fun/books.json';

  constructor(private http: HttpClient) { }

  // ------ http request for getting user data from server----------
  getData(): Observable<user> {
    return this.http.get<{data:user}>(this.baseUrl).pipe(map((res) => res.data));
  }
}
