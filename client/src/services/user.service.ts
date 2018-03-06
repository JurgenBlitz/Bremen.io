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
  city:string,
  instrument:string,
  experience:string,
  otherInstrument:string,
}

@Injectable()
export class UserService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {
  }

  private user: User;

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  getUser(){
    return this.user;
  }

  fillProfile(user, userId) {
    console.log(user);
    return this.http.post(`${this.BASEURL}/api/users/${userId}/edit`, user, this.options)
      .map(res => res.json())
      .map(user  =>  {
        this.user = user; 
        return user;
      })
      .catch(this.handleError);
  }

  show(userId){
    return this.http.get(`${this.BASEURL}/api/users/${userId}/show`, this.options)
    .map(res => res.json())
    .map(user=> user)
    .catch(this.handleError);
  }

  editProfile (user, userId){
    
  }
  
}
