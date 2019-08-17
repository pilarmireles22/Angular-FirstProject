import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(cantidad, gender){
    return this.http.get('https://randomuser.me/api/?results=' + cantidad + '&gender=' + gender);
  }
}
