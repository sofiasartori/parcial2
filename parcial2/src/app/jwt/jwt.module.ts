import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
//import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: HttpClient) {
  //return new Http(new AuthConfig(), http, options);
}

/**
 * Configuracion basica del modulo angular2-jwt
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: HttpClient,
      useFactory: authHttpServiceFactory,
      deps: [HttpClient, HttpRequest]
    }
  ]
})
export class JwtModule { }
