import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface Ad {
  creator_id:number,
  title:string,
  imgUrl:string,
  category:string,
  description:string,
  styles:string,
  mainInstrument:string,
  city: string
}

@Injectable()
export class AdService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  constructor(private http: Http) {
  }
  public ad: Ad;

  getUser(){
    return this.ad;
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

}
