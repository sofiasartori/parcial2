import { Component, OnInit, Input } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  @Input() idMascota: number;
  miMascotaServicio: MascotaService;
  mascota: number;
  mascots: string;
  edicionMascota: Mascota;

  constructor(serviceMascota: MascotaService, private builder: FormBuilder) {
    this.miMascotaServicio = serviceMascota;
   }

  public onClickButton() {
    this.miMascotaServicio.traerUno('mascotas/', this.idMascota).then(data=>{
      console.log(data);
      this.edicionMascota = new Mascota(data[0].id, data[0].animal, data[0].raza, data[0].nombre, data[0].edad, data[0].duenio, data[0].foto);
      console.log(JSON.stringify(this.edicionMascota));
    });
    
  }

  ngOnInit() {
  }

  animal = new FormControl('', [
    Validators.required
  ]);
  
  raza = new FormControl('', [
    Validators.required
  ]);

  nombre = new FormControl('', [
    Validators.required
  ]);

  edad = new FormControl('', [
    Validators.required
  ]);

  duenio = new FormControl('', [
    Validators.required
  ]);

  foto = new FormControl('', [
    Validators.required
  ]);
  
  editarMascotaForm: FormGroup = this.builder.group({
    animal: this.animal,
    raza: this.raza,
    nombre: this.nombre,
    edad: this.edad,
    duenio: this.duenio,
    foto: this.foto
  });

  editarMascota()
  {        
    this.miMascotaServicio.modificar('mascotas/alta', this.edicionMascota);
    this.edicionMascota=null;
  }

}
