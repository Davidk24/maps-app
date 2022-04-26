import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const FAKE_JWT_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlIFNob3RzIFdpdGggUHJvZmFuaXMiLCJpYXQiOjE2MjQyNzU1MjUsImV4cCI6MTY1NTgxMTUyNSwiYXVkIjoiQ29kZSBTaG90IFdpdGggUHJvZmFuaXMgU3Vic2NyaWJlcnMiLCJzdWIiOiJDb2RlIFNob3QgV2l0aCBQcm9mYW5pcyBTdWJzY3JpYmVycyIsIlVzZXJuYW1lIjoicHJvZmFuaXMiLCJGaXJzdE5hbWUiOiJGYW5pcyIsIlJvbGUiOlsiQWRtaW4iLCJTdXBlciBBZG1pbiJdfQ.mT1UD7DXTWRm4etsW9BuWcg5bj2CaeAQVXaoEOIwB7o';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loginUser(user: string, password: string): Observable <boolean> {
    if (user == 'admin' && password == 'admin') {
      localStorage.setItem('token', FAKE_JWT_TOKEN);
      return of(true);
    }
    return of(false);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
