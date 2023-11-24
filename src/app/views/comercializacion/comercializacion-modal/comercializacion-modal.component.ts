import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-comercializacion-modal',
  templateUrl: './comercializacion-modal.component.html',
  styleUrls: ['./comercializacion-modal.component.css']
})
export class ComercializacionModalComponent implements OnInit {

  @Input() clientesExistentes: any;
  @Input() creditoExistentes:any = [];
  @Input() empleadosExistentes: any;

  @Output() comercialNuevo = new EventEmitter<any>();

  @Output() clienteNuevo = new EventEmitter<any>();

  mostrarDatoCLiente = false;
  deshabilitarDatoCLiente = false;

  monto_credito: any;
  numero_total_cuotas: any;
  dni: any;
  nombre:any;
  apellido:any;
  telefono:any;
  direccion:any;
  correo:any;
  credito: any;

  cliente: any;

  idEmpleado: any;
  empleado:any;

  constructor(private bsModalRef: BsModalRef,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.idEmpleado = this.loginService.getIdEmpleado();
    this.empleadosExistentes.forEach((x:any) => {
      if(x.id == this.idEmpleado){
        this.empleado = x;
      }
    })
  }

  guardarInfromacion(){
    const dato = {
      "id": null,
      "monto_credito": this.monto_credito,
      "numero_total_cuotas": this.numero_total_cuotas,
      "estado": 'Pendiente',
      "empleado": this.empleado,
      "cliente": {
        "id": this.deshabilitarDatoCLiente? this.cliente.id: this.clientesExistentes.length + 1,
        "dni": this.dni,
        "nombre": this.nombre,
        "apellido": this.apellido,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "correo": this.correo
      },
      "credito": this.creditoExistentes[this.credito]
    }

    console.log(dato);

    if(!this.deshabilitarDatoCLiente){
      this.clienteNuevo.emit(dato.cliente);
    }

    this.comercialNuevo.emit(dato);


    this.bsModalRef.hide();
  }

  cerrarModal(){
    this.bsModalRef.hide();
  }

  buscarCliente(){
    if(this.dni != null && this.dni != ''){
      let flag = false;
      for(let i = 0; i < this.clientesExistentes.length; i++){
        if(this.clientesExistentes.dni == this.dni){
          this.cliente = this.clientesExistentes;
          flag = true;
          break;
        }
      }

      if(flag){
        this.dni = this.cliente.dni;
        this.nombre = this.cliente.nombre;
        this.apellido = this.cliente.apellido;
        this.telefono = this.cliente.telefono;
        this.direccion = this.cliente.direccion;
        this.correo = this.cliente.correo;
        this.deshabilitarDatoCLiente = true;

      }

      this.mostrarDatoCLiente = true;

    }
  }

}
