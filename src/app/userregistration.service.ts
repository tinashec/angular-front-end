import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8081/user/register';

  // service function that prints to the console for now
  async registerUser(name: string, surname: string, number: string){
    
    // set the user 
    let user: User = {
      firstName: name,
      lastName: surname,
      phoneNumber: number
    };

    // make the POST request and log the response
    this.http.post(this.url, user).subscribe(Response => {
      // ToDo: handle the response
    });
    console.log(`User registered; name: `, user.firstName, `last name: `, user.lastName, `phone number: `, user.phoneNumber);
  }
}

