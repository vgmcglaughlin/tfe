import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Member } from './models/member';
import { environment } from '../../environments/environment';

interface LoginResponse {
  id: string;
  ttl: number;
  created: Date;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private token: string|null = null;

  constructor(
    private http: HttpClient,
  ) { }

  login(googleUser) {
    const user: any = {};

    // ((u, p) => {
    //   u.id = p.getId();
    //   u.name = p.getName();
    //   u.email = p.getEmail();
    //   u.imageUrl = p.getImageUrl();
    //   u.givenName = p.getGivenName();
    //   u.familyName = p.getFamilyName();
    // })(user, googleUser.getBasicProfile());

    ((u, r) => {
      u.token = r.id_token;
    })(user, googleUser.getAuthResponse());

    return this.http.post(`${environment.apiBase}/members/token-login`, {
      token: user.token,
    }).pipe(
      tap((res: LoginResponse) => this.token = res.id),
    );
  };

  logout() {
    return this.http.post(`${environment.apiBase}/members/logout?access_token=${this.token}`, {}).pipe(
      tap(() => {
        this.token = null;
        gapi.auth2.getAuthInstance().signOut();
      }),
    );
  }

  profile(): Observable<Member> {
    return this.http.get<Member>(`${environment.apiBase}/members/me?access_token=${this.token}`);
  }

  isLoggedIn(): boolean {
    return !!(this.token && gapi.auth2 && gapi.auth2.getAuthInstance().isSignedIn.get());
  }
}
