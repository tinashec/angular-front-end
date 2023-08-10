import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor() { }

  // service function that prints to the console for now
  registerUser(firstName: string, lastName: string, phoneNumber: string){
    console.log(`User registered; name: ${firstName}, last name: ${lastName}, phone number: ${phoneNumber}`);
  }
}

