import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { EditarMascotaComponent } from '../editar-mascota/editar-mascota.component';

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

  constructor(serviceMascota: MascotaService) {
    this.miMascotaServicio = serviceMascota;


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
