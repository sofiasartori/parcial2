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
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { PedirTurnoComponent } from './pedir-turno/pedir-turno.component';
import { ListarTurnoComponent } from './listar-turno/listar-turno.component';
import { JwtModule } from './jwt/jwt.module';
import { WsService } from './ws.service';
import { AuthService } from './auth.service';
import { VerificarJWTService } from './verificar-jwt.service';

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
    ListadoMascotaComponent,
    EditarMascotaComponent,
    PedirTurnoComponent,
    ListarTurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule
  ],
  providers: [WsService,
    AuthService,
    VerificarJWTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// JwtModule