import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { baseurl } from '../shared/baseurl';
import { User } from '../shared/User';
import { map } from 'rxjs';
import { Token } from '../shared/token';
import { Router } from '@angular/router';
import { Register } from '../shared/register';
import { getRtlScrollAxisType } from '@angular/cdk/platform';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService, private _router: Router) { }

  submitLogin(user: User): Observable<Token> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.post<Token>(baseurl + 'Login', user, httpOptions)
      .pipe(map(result => {
        localStorage.setItem('access_token', result.token);
        localStorage.setItem('role', result.role);
        return result;
      })
      );

  }

  signUp(userRegister: Register): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post<boolean>(baseurl + 'SignUp', userRegister, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  isAdmin(): boolean {
    return (localStorage.getItem('role') == 'Admin');
  }

  isUser(): boolean {
    return (localStorage.getItem('role') == 'User');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this._router.navigate(['/home']);
  }

  loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }


}
