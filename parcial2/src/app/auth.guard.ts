import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router){
    console.log("asdaaaaaaa");
  }
  canActivate(){
    console.log("asda");
    if (localStorage.getItem('tipo') === 'cliente') {
      return true;
    } else {
      return false;
    }
  }
}