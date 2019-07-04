import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MascotaGuard implements CanActivate{
  constructor(private router: Router){
    console.log('mascota');
  }
  canActivate(){

    if (localStorage.getItem('tipo') === 'administrador') {
      return true;
    } else {
      return false;
    }
  }
}
