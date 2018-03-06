import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';

interface Message {
    post: string,
    title: string,
    creator_id:number,
    target_id:number,
    content: string, 
    description:string,
    date:Date
}

@Injectable()
export class MessageService {
    public mensajes:Array<Message>= [];

    socket: any;
    constructor(){
        // this.socket = io('http://localhost:3000/');
        // this.socket.on('connect',() =>console.log("Connected to WS"))
        // this.socket.on('chat', m => {
        //     console.log("Mensaje recibido");
        //     this.mensajes.push()
        // })
    }
    
    sendMessage(m:string){
        this.socket.emit('chat-ready',{
            status:"Mensaje recibido",
            mensaje:m
        });
        this.mensajes.push();
    }
}