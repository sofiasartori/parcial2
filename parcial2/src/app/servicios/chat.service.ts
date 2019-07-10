import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { MensajeChat } from '../modelos/mensaje-chat.model';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  user: firebase.User;
  mensajesChat: AngularFireList<MensajeChat>;
  mensajeChat: MensajeChat;
  userName: Observable<string> | string ;
  
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth=>{
      if(auth !== undefined && auth !== null){
        this.user = auth;
      }
    })
   }

  enviarMensaje(mensaje: string){
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.mensajesChat = this.obtenerMensajes();
    this.mensajesChat.push({
      email: email,
      userName: this.userName,
      message: mensaje,
      timeSent: timestamp      
    });
  }

  getTimeStamp(){
    const ahora = new Date();
    const fecha = ahora.getUTCFullYear() + '/' + (ahora.getUTCMonth()+1) + '/' + ahora.getUTCDay();
    const hora = ahora.getUTCHours() + ':' + ahora.getUTCMinutes() + ':' + ahora.getUTCSeconds();
    return (fecha + ' ' + hora);
  }

  obtenerMensajes(): AngularFireList<MensajeChat>{
    return this.db.list('/messages', ref=>{
      return ref.limitToLast(25).orderByKey()
    })
  }
}
