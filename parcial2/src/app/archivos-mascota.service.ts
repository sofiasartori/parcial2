import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosMascotaService {

  //api = 'http://localhost/veterinaria/apirest.php/';
  api = 'http://localhost:8080/veterinaria/apirest.php/';
  peticion: any;
  constructor( public miHttp: MiHttpService ) {
  }


  public traerMascotas(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
    .toPromise()
    .then( data => {
      console.log('Archivo mascotas');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }

  public insertarMascota(ruta, objeto) {
    console.log('objeto:' + JSON.stringify(objeto));
    return this.miHttp.httpPostP2(this.api + ruta, JSON.stringify(objeto));

  }

  public modificarMascota(ruta, id) {
    console.log('id:' + id);
    return this.miHttp.httpPut(this.api + ruta, id);

  }

}
