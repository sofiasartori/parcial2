import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLoginComponent } from './error-login/error-login.component';
import { EmailSesionComponent } from './email-sesion/email-sesion.component';
import { AltaMascotaComponent } from './alta-mascota/alta-mascota.component';
import { ListadoMascotaComponent } from './listado-mascota/listado-mascota.component';

const appRoutes: Routes = [
  {
    path: 'inicio',
    //canActivate: [VerificarJWTService],
    component: InicioComponent
  },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  //{ path: 'pagina2', component: Pagina2Component, canActivate: [VerificarJWTService], },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-usuario',  component: FormularioAltaComponent},
  { path: 'errorLogin',  component: ErrorLoginComponent}
  //{ path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioAltaComponent,
    LoginComponent,
    InicioComponent,
    ErrorLoginComponent,
    EmailSesionComponent,
    AltaMascotaComponent,
    ListadoMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
