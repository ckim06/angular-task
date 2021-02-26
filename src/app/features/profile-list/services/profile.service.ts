import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserResults } from './user-results';
import {UserProfile} from '@interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfiles(): Observable<UserProfile[]> {
    return this.http
      .get<UserResults>(
        'https://randomuser.me/api/?results=10'
      )
      .pipe(map((users) => users.results || []));
  }
}