import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8081/user/login'

  async loginUser(phoneNumber: string, password: string){
    let loginDetails = {
      phoneNumber: phoneNumber,
      password: password
    }
    
    this.http.post(this.url, loginDetails).subscribe(Response => {
      // ToDo: handle the response
      console.log(`Login response: `, Response)
    });
  }
}
