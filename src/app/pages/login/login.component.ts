import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LoginDto } from '../../interface/login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(private _authService:AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public submit(){
    let login = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    } as LoginDto

    this._authService.login(login)
  }
  
}

