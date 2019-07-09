import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../servicios/mascota.service';
import { EditarMascotaComponent } from '../editar-mascota/editar-mascota.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {

  listado: any;
  miMascotaServicio: MascotaService;
  modificarMascota: EditarMascotaComponent;
  mascotaBuscada : any;

  constructor(serviceMascota: MascotaService, private sanitizer: DomSanitizer) {
    this.miMascotaServicio = serviceMascota;
  }

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(' data:image/jpeg;charset=utf-8;base64,' + url);
  }

  ngOnInit() {
    this.TraerTodos();
  }
  TraerTodos() {
    this.miMascotaServicio.traertodos('mascotas/', '').then(data => {
      this.listado = data
      console.log(data)
      
    })
  }

  callbackBuscarMascota(mascotaBuscada){
    this.mascotaBuscada = mascotaBuscada;
  }

}
