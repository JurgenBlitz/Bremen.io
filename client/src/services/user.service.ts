import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  id:number,
  username:string,
  imgUrl:string,
  description:string,
  mainInstrument:string,
  experience:string,
  otherInstrument:string,
}

@Injectable()
export class UserService {

  BASEURL:string = "http://localhost:3000" /*good?*/
  options:object = {withCredentials:true};
  constructor(private http: Http) {
  }

  private user:User;

  getUser(){
    return this.user;
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  editMyUser (user, userId) {
    console.log(user);
    return this.http.post(`${this.BASEURL}/api/users/${userId}/edit`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
