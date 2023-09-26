import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8081/user/register';

  // service function that send request to the backend and prints the response to the console for now
  registerUser(name: string, surname: string, number: string, password: string): Observable<any>{
    
    // set the user 
    const user: User = {
      firstName: name,
      lastName: surname,
      phoneNumber: number,
      password: password
    };

    const response = this.http.post(this.url, user);
    return response;
  }
}

