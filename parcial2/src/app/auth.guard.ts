import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  authServicio: AuthService;
  
  constructor(private router: Router, autoServicio: AuthService){
    console.log("asdaaaaaaa");
    this.authServicio=autoServicio;
  }

  canActivate(){    
    if (this.authServicio.isLogued()){
      console.log("deberia entrar");
      return true;
    } else {
      return false;      
    }
  }
}
