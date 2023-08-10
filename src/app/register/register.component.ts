import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserRegistrationService } from '../userregistration.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule
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
    phoneNumber: new FormControl('')
  });

  constructor(){}

  // register the user function
  registerUser(){
    this.userService.registerUser(
      this.registerForm.value.firstName ?? '',
      this.registerForm.value.lastName ?? '',
      this.registerForm.value.phoneNumber ?? ''
    );
  }

  // user interface to hold the user details
  user: User = {
    firstName: 'Tinashe',
    lastName: 'Chinyanga',
    phoneNumber: '+263774666249'
  }
}
