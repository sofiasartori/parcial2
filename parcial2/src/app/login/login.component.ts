import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { registroUsuarioService } from '../registro-usuario.service';
import { Router, Data } from '@angular/router';
import { WsService } from '../ws.service';
import { VerificarJWTService } from '../verificar-jwt.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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

    console.log('email: ' + this.usuario.email);
    let jwt: JwtHelperService;
    let pepe: string;
    this.miUsuarioServicio.login('/login/', this.usuario).toPromise().then(response =>{
      pepe = JSON.stringify(response)
      localStorage.setItem(this.emailLocal, this.usuario.email);
      jwt.decodeToken(pepe);
       this.router.navigate(['/inicio']);
      localStorage.setItem(this.tokenLocal, pepe);
      },
      msg=>{
        this.router.navigate(['/errorLogin']);
      })    
  }
}
