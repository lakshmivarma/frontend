import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl="http://localhost:4080/api/login"
  
  private _registerUrl="http://localhost:4080/api/register"

  constructor(private http: HttpClient,private _router:Router) { }

userRegistration(user){
  return this.http.post<any>(this._registerUrl,user)
}

userLogin(user){
  return this.http.post<any>(this._loginUrl,user)
}
}