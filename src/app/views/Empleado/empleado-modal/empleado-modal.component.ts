import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-empleado-modal',
  templateUrl: './empleado-modal.component.html',
  styleUrls: ['./empleado-modal.component.css']
})
export class EmpleadoModalComponent implements OnInit {
  @Input() empleadosExistentes: any;

  @Input() rolesExistentes: any;

  @Output() empleadoNuevo = new EventEmitter<any>();

  id: any;
  dni: any;
  nombre: any;
  apellido: any;
  telefono: any;
  direccion: any;
  correo: any;
  usuario: any;
  contrasena: any;
  rol: any;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  guardarInfromacion(){

    const dato = {
      "id": null,
      "dni": this.dni,
      "nombre": this.nombre,
      "apellido": this.apellido,
      "telefono": this.telefono,
      "direccion": this.direccion,
      "correo": this.correo,
      "login": {
        "id": null,
        "usuario": this.usuario,
        "contraseña": this.contrasena,
        "rol": this.rolesExistentes[this.rol]
      }
    }

    console.log(this.rolesExistentes[this.rol]);
    this.empleadoNuevo.emit(dato);
    this.bsModalRef.hide();

  }

  cerrarModal(){

    this.bsModalRef.hide();
  }

}
