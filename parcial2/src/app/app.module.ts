import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAltaComponent } from './componentes/formulario-alta/formulario-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLoginComponent } from './componentes/error-login/error-login.component';
import { EmailSesionComponent } from './componentes/email-sesion/email-sesion.component';
import { AltaMascotaComponent } from './componentes/alta-mascota/alta-mascota.component';
import { ListadoMascotaComponent } from './componentes/listado-mascota/listado-mascota.component';
import { EditarMascotaComponent } from './componentes/editar-mascota/editar-mascota.component';
import { PedirTurnoComponent } from './componentes/pedir-turno/pedir-turno.component';
import { ListarTurnoComponent } from './componentes/listar-turno/listar-turno.component';
import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './auth.guard';
import { MenuComponent } from './componentes/menu/menu.component';
import { BotonMenuComponent } from './componentes/boton-menu/boton-menu.component';
import { FormularioEdicionComponent } from './componentes/formulario-edicion/formulario-edicion.component';

const appRoutes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'formularioTurno', component: PedirTurnoComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'formulario-usuario',  component: FormularioAltaComponent},
  { path: 'errorLogin',  component: ErrorLoginComponent},
  { path: 'formularioMascota',  component: AltaMascotaComponent, canActivate: [AuthGuard]},
  { path: 'listaMascota',  component: ListadoMascotaComponent, canActivate: [AuthGuard]},
  { path: 'listaTurno',  component: ListarTurnoComponent, canActivate: [AuthGuard]},
  { path: 'menu',  component: MenuComponent, canActivate: [AuthGuard]},
  { path: 'editarMascota',  component: FormularioEdicionComponent, canActivate: [AuthGuard]}
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
    ListarTurnoComponent,
    MenuComponent,
    BotonMenuComponent,
    FormularioEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
