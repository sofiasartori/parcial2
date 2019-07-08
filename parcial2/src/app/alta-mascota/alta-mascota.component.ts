import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-alta-mascota',
  templateUrl: './alta-mascota.component.html',
  styleUrls: ['./alta-mascota.component.css']
})
export class AltaMascotaComponent implements OnInit {

  @Output() SeCreoUnaMascota: EventEmitter<any>= new EventEmitter<any>();
  nuevaMascota: Mascota;
  miMascotaServicio: MascotaService;
  
  constructor(serviceMascota: MascotaService, private builder: FormBuilder) {
    this.miMascotaServicio = serviceMascota;
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
  
  altaMascotaForm: FormGroup = this.builder.group({
    animal: this.animal,
    raza: this.raza,
    nombre: this.nombre,
    edad: this.edad,
    duenio: this.duenio,
    foto: this.foto
  });


  ngOnInit() {
  }

  crearMascota()
  {    
    this.SeCreoUnaMascota.emit(this.nuevaMascota);
    
    this.miMascotaServicio.insertar('mascotas/alta', this.nuevaMascota);
    this.nuevaMascota=null;
  }
  hacerNuevaMascota()
  {
    this.nuevaMascota=new Mascota(0,"","", "", 0,"", "");

  }

}
