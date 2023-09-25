import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserRegistrationService } from '../userregistration.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [
    UserRegistrationService
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  // inject the service
  userService: UserRegistrationService = inject(UserRegistrationService);

  // declare the formGroup
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    pin: new FormControl('')
  });

  constructor(private router: Router){}

  // register the user function
  registerUser(){
    this.userService.registerUser(
      this.registerForm.value.firstName ?? '',
      this.registerForm.value.lastName ?? '',
      this.registerForm.value.phoneNumber ?? '',
      this.registerForm.value.pin ?? '',
    ).subscribe ({
      next: (response) => {
        this.router.navigate(['/home']);
        }, 
      error: (error) => {
        // unable to register
        console.log (`Error message: `, error);
        }
    });
  }

  // user interface to hold the user details
  user: User = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    pin: '',
  }
}
