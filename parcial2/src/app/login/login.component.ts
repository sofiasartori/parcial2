import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { registroUsuarioService } from '../registro-usuario.service';
import { Router, Data } from '@angular/router';
import { WsService } from '../ws.service';
import { AuthService } from '../auth.service';
import * as jwt_decode from "jwt-decode";
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario ('', '', '');
  miUsuarioServicio: registroUsuarioService;
  emailLocal: string = 'email';
  tokenLocal: string = 'token';
  tipoLocal: string = 'tipo';
  authServicio: AuthService;
  auth: AuthGuard;
  
  constructor(serviceUsuario: registroUsuarioService, private builder: FormBuilder, private router: Router, private ws: WsService, authoService: AuthService, authGuarda: AuthGuard) {
    this.miUsuarioServicio = serviceUsuario;
    this.usuario.email='';
    this.authServicio = authoService;
    this.auth = authGuarda;
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
    let respuesta: string;
    let token: any;
    let tipo: string;
  
    this.miUsuarioServicio.login('/login/', this.usuario).toPromise().then(response =>{
      respuesta = JSON.stringify(response);
      console.log("respuesta "+ respuesta);
      localStorage.setItem(this.emailLocal, this.usuario.email);
      localStorage.setItem(this.tokenLocal, respuesta);
      token = jwt_decode(respuesta);
      tipo = token.data.Tipo;
      localStorage.setItem(this.tipoLocal, tipo);
        this.auth.canActivate;
      },
      msg=>{
        this.router.navigate(['/errorLogin']);
      })    
  }
}
