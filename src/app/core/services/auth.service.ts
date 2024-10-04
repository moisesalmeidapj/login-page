import { Injectable } from '@angular/core';
import { LoginDTO } from '../../interface/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs';
import { TokenDTO } from '../../interface/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ""

  constructor(private http: HttpClient) { }

  login(login:LoginDTO){
    return this.http.post<TokenDTO>(this.apiUrl, login).pipe(
      tap((value)=>{
        sessionStorage.setItem("api-token", value.token)
      })
    )
  }
}
