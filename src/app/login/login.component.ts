import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Form} from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css']
})
export class LoginComponent {

  // inject the login service
  loginService: LoginService = inject(LoginService)

  // declare the formGroup
  loginForm = new FormGroup({
    phoneNumber: new FormControl(''),
    password: new FormControl('')
  });

  // register the login function
  loginUser(){
    this.loginService.loginUser(this.loginForm.value.phoneNumber ?? '',  this.loginForm.value.password ?? '');
    
  }
}
