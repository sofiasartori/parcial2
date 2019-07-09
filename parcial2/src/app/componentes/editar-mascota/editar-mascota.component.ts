import { Component, OnInit, Input } from '@angular/core';
import { MascotaService } from '../../servicios/mascota.service';
import { Mascota } from '../../clases/mascota';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  @Input() idMascota: number;
  miMascotaServicio: MascotaService;
  edicionMascota: Mascota;
  admin: string;
  animal: FormControl;
  raza: FormControl;
  nombre: FormControl;
  edad: FormControl;
  duenio: FormControl;
  foto: FormControl;
  editarMascotaForm: FormGroup;
  nombreFoto: string = 'C:/usuarios/sofias/Descargas/';

  constructor(serviceMascota: MascotaService, private builder: FormBuilder, private router: Router) {
    this.miMascotaServicio = serviceMascota;

    this.miMascotaServicio = serviceMascota;
    if(localStorage.getItem("tipo")==="administrador"){
      this.admin="ok";
    }

    this.animal = new FormControl('', [
      Validators.required
    ]);
    
    this.raza = new FormControl('', [
      Validators.required
    ]);
  
    this.nombre = new FormControl('', [
      Validators.required
    ]);
  
    this.edad = new FormControl('', [
      Validators.required
    ]);
  
    this.duenio = new FormControl('', [
      Validators.required
    ]);
  
    this.foto = new FormControl('', [
      Validators.required
    ]);
    const group = (this.admin === 'ok')? {
      animal: this.animal,
      raza: this.raza,
      nombre: this.nombre,
      edad: this.edad,
      duenio: this.duenio,
      foto: this.foto
    } : 
    {
      animal: this.animal,
      raza: this.raza,
      nombre: this.nombre,
      edad: this.edad,
      foto: this.foto
    }

    this.editarMascotaForm = this.builder.group(group);
   }

  public onClickButton() {
    this.miMascotaServicio.traerUno('mascotas/', this.idMascota).then(data=>{
      this.edicionMascota = new Mascota(data[0].id, data[0].animal, data[0].raza, data[0].nombre, data[0].edad, data[0].duenio, data[0].foto);
    });
    
  }

  ngOnInit() {
  }
  
  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          // this.foto.setValue(btoa(binaryString));
          this.edicionMascota.foto =  btoa(binaryString)
          console.log(btoa(binaryString));
  }

  editarMascota()
  {        
    console.log(this.foto.value);
    console.log(this.edicionMascota);
    this.miMascotaServicio.modificar('mascotas/alta', this.edicionMascota);
    this.edicionMascota=null;
    
  }

}
