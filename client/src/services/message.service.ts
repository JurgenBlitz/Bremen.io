import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';

interface Thread {
    title: string,
    creator_id:number,
    target_id:number,
    replies: Array<Object>  ,
    date:Date
}


@Injectable()
export class MessageService {
    BASEURL:string = environment.BASEURL;
    options:object = {withCredentials:true};
    constructor(private http: Http) {
    }

    private thread: Thread;

    handleError(err) {
        console.log(err);
        return Observable.throw(err.json().message);
      }

  
    
    startThread() {
        return this.http.get(`${this.BASEURL}/api/threads/new`, this.options)
        .map(res => res.json())
        .catch(this.handleError); 
    }


    // OPÍ, OPÁ. CADA DÍA YO TE QUIERO MÁH.
    sendMessage(){
        return this.http.post(`${this.BASEURL}/api/threads/new`, this.options)
        .map(res => res.json())
        .catch(this.handleError); 
    }

    getMessages(userId) {
        return this.http.get(`${this.BASEURL}/api/users/${userId}/inbox`, this.options)
        .map((res) => res.json())
        .catch(this.handleError); 
    }
}
