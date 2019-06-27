import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-sesion',
  templateUrl: './email-sesion.component.html',
  styleUrls: ['./email-sesion.component.css']
})
export class EmailSesionComponent implements OnInit {

  email: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.email=localStorage.getItem('email');
  }

  logout(){
    localStorage.removeItem('email');
    this.ngOnInit();
  }

}
