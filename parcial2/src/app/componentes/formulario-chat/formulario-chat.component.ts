import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';

@Component({
  selector: 'app-formulario-chat',
  templateUrl: './formulario-chat.component.html',
  styleUrls: ['./formulario-chat.component.css']
})
export class FormularioChatComponent implements OnInit {

  mensaje: string;
  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  enviar(){
    this.chat.enviarMensaje(this.mensaje)
  }

  handleSubmit(event){
    if(event.keyCode === 13){
      this.enviar(); 
    }
  }

}
