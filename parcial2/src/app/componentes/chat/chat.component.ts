import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';

import { MensajeChat } from 'src/app/modelos/mensaje-chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {

  //chat: AngularFireList<MensajeChat[]>;

  constructor(private chatServ: ChatService) { }

  ngOnInit() {
    console.log("feed");
    //this.chat= this.chatServ.obtenerMensajes();
  }

  ngOnChanges(){
    //this.chat= this.chatServ.obtenerMensajes();
  }

}
