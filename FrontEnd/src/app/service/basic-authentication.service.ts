import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const AUTHENTICATED_USER = 'authenticaterUser'
export const TOKEN = 'token'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  // authenticate(username,password)      
  // {
  //   // console.log('Before ' + this.isUserLoggedIn());
  //   if(username === 'Harissh' && password === 'Harish123')
  //   {
  //     sessionStorage.setItem('authenticaterUser', username)    //No need this because it is
                                                                  // hard coded authentication
  //     // console.log('After ' + this.isUserLoggedIn());
  //     return true;
  //   }
  //   else
  //   {
  //     return false;
  //   }
  // }


  executeJWTAuthenticationService(username,password)
  {
    return this.http.post<any>(`${API_URL}/authenticate`,
    {username,password}).pipe(
      map(
        data => 
        {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }


  executeAuthenticationService(username,password)       // Not used anymore because we started using JWT based authentication
  {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders
    (
      {
        Authorization: basicAuthHeaderString
      }
    )
    return this.http.get<AutenticationBean>(`${API_URL}/basicAuth`,
    {headers}).pipe(
      map(
        data => 
        {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser()
  {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken()
  {
    if(this.getAuthenticatedUser())
    {
      return sessionStorage.getItem(TOKEN);
    }
    
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null);
  }

  logout()
  {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}


export class AutenticationBean
{
  constructor(public message : string)
  {

  }
}