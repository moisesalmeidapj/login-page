import { Injectable } from '@angular/core';

import { User } from '../../interface/user';
import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../../interface/login-dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginUserDto:LoginDto){
    return 
  }


}
