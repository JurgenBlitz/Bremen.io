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

  // getAd(){
  //   return this.ad;
  // }

  handleError(error) {
    console.log(error);
    return Observable.throw(error.json().message);
  }
  createAd(ad){
    console.log(ad);
    return this.http.post(`${this.BASEURL}/api/ads/new`, ad, this.options)
    .map(res => res.json())
    .map(ad => {
      this.ad = ad;
      return ad;
    })
    .catch(this.handleError); 
  }

  show(adId){
    console.log(adId);
    return this.http.get(`${this.BASEURL}/api/ads/${adId}/show`, this.options)
    .map(res => res.json())
    .map(ad=> ad)
    .catch(this.handleError);
  }
}
