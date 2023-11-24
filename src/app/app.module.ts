import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './component/body/body.component';
import { ComercializacionComponent } from './views/comercializacion/comercializacion/comercializacion.component';
import { ReferenciacionComponent } from './views/referenciacion/referenciacion/referenciacion.component';
import { ComercializacionModalComponent } from './views/comercializacion/comercializacion-modal/comercializacion-modal.component';
import { CobranzaComponent } from './views/cobranza/cobranza/cobranza.component';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RolComponent } from './views/Rol/rol/rol.component';
import { RolModalComponent } from './views/Rol/rol-modal/rol-modal.component';
import { EmpleadoModalComponent } from './views/Empleado/empleado-modal/empleado-modal.component';
import { EmpleadoComponent } from './views/Empleado/empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    ComercializacionComponent,
    ReferenciacionComponent,
    ComercializacionModalComponent,
    CobranzaComponent,
    RolComponent,
    RolModalComponent,
    EmpleadoModalComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
