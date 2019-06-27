import { Component, OnInit, Input } from '@angular/core';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  @Input() mascota: number;
  miMascotaServicio: MascotaService;

  constructor(serviceMascota: MascotaService) {
    this.miMascotaServicio = serviceMascota;
   }

  public onClickButton() {
    this.miMascotaServicio.modificar('mascotas/', this.mascota);
  }

  ngOnInit() {
  }

}
