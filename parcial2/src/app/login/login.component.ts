import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { registroUsuarioService } from '../registro-usuario.service';
import { Router } from '@angular/router';
import { WsService } from '../ws.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario ('', '', '');
  miUsuarioServicio: registroUsuarioService;
  emailLocal: string = 'email';
  
  constructor(serviceUsuario: registroUsuarioService, private builder: FormBuilder, private router: Router, private ws: WsService) {
    this.miUsuarioServicio = serviceUsuario;
    this.usuario.email='';
   }

  email = new FormControl('', [
    Validators.required
  ]);
  

  password = new FormControl('', [
    Validators.required
  ]);
  
  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });


  ngOnInit() {
  }

  login(){

    console.log( this.usuario );
    this.ws.get( {} )
    .then( data => {
      console.log(data);
      if ( data.token )
      {
        localStorage.setItem('token', data.token);
      }
    })
    .catch( e => {
      console.log(e);
    } );

    /*console.log('email: ' + this.usuario.email);
    this.miUsuarioServicio.buscar('usuarios/', this.usuario.email).then(response=>{
      if(!response){
        console.log(response);
        console.log('nada');
        this.router.navigate(['/errorLogin']);
      }
      else{
        console.log(response);
        localStorage.setItem(this.emailLocal, this.usuario.email);
        this.router.navigate(['/inicio']);
      }
    });*/
  }

}
