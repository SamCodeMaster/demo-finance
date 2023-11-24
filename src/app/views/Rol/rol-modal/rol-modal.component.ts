import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rol-modal',
  templateUrl: './rol-modal.component.html',
  styleUrls: ['./rol-modal.component.css']
})
export class RolModalComponent implements OnInit {


  @Input() rolesExistentes: any;

  @Output() rolNuevo = new EventEmitter<any>();

  nombre_rol: any;

  descripcion: any;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  guardarInfromacion(){
    const dato = {
      "id": null,
      "nombre_rol": this.nombre_rol,
      "descripcion": this.descripcion
    }
    this.rolNuevo.emit(dato);
    this.bsModalRef.hide();

  }

  cerrarModal(){
    this.bsModalRef.hide();
  }

}
