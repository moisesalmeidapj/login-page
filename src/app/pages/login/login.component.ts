import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LoginDTO } from '../../interface/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(private authService:AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public submit(){
    let login = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as LoginDTO;

    this.authService.login(login).subscribe({
      next: () => {
        this.navigate()
      },
      error: () => console.log("Deu ruim")
    })
  }

  public navigate(){
    this.router.navigate(['home'])
  }
}

