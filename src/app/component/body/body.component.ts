import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/services/login/login.service';
import { RolModalComponent } from 'src/app/views/Rol/rol-modal/rol-modal.component';

import { Subscription } from 'rxjs';
import { EmpleadoModalComponent } from 'src/app/views/Empleado/empleado-modal/empleado-modal.component';
import { ComercializacionModalComponent } from 'src/app/views/comercializacion/comercializacion-modal/comercializacion-modal.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  

  constructor(private loginService: LoginService,
    private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.onInitialize();
  }

  rol!: string;
  views:string[] = [];

  comercializacionGridData = [
    {
      "id": 1,
      "monto_credito": 30000,
      "numero_total_cuotas": 10,
      "estado": 'Pendiente',
      "empleado": {
        "id": 1,
        "dni": 1237546987,
        "nombre": 'Samuel',
        "apellido": 'Padilla',
        "telefono": 3235447864,
        "direccion": 'Kra 34 # 23 345',
        "correo": "Sam@ejemplo.com"
      },
      "cliente": {
        "id": 1,
        "dni": 5784936647,
        "nombre": 'Juan',
        "apellido": 'Hernandez',
        "telefono": 3658763572,
        "direccion": 'Kra45e # 345 32',
        "correo": "Her@ejemplo.com"
      },
      "credito": {
        "id": 1,
        "nombre_credito": 'credito carro',
        "descripcion": 'Descripcion credito carro'
      }
    }
  ];

  refGridData: any[] = [];
  cobGridData: any[] = [];
  empleadoGridData: any[] = [];
  rolGridData: any[] = [
    {
      "id": 1,
      "nombre_rol": 'SUPER_USER',
      "descripcion": 'descripcion SUPER_USER'
    },
    {
      "id": 2,
      "nombre_rol": 'COMERCIAL',
      "descripcion": 'descripcion COMERCIAL'
    },
    {
      "id": 3,
      "nombre_rol": 'REFERENCIACION',
      "descripcion": 'descripcion REFERENCIACION'
    },
    {
      "id": 4,
      "nombre_rol": 'COBRANZA',
      "descripcion": 'descripcion COBRANZA'
    }
  ];

  creditosExistentes = [
    {
      "id": 1,
      "nombre_credito": 'Credito Carro',
      "descripcion": 'descripcion Credito Carro'
    },
    {
      "id": 2,
      "nombre_credito": 'Credito Casa',
      "descripcion": 'descripcion Credito Casa'
    },
    {
      "id": 3,
      "nombre_credito": 'Credito Empresa',
      "descripcion": 'descripcion Credito Empresa'
    }
  ]

  clientesExistentes = [];



  rolForm = '';


  subRolModal: Subscription | undefined = new Subscription();

  subEmplModal: Subscription | undefined = new Subscription();

  subComercialModal: Subscription | undefined = new Subscription();

  

  onInitialize(){
    this.rol = this.loginService.getRol()!;

    switch(this.rol){
      case 'SUPER_USER':
        this.views = [
          'Comercialización',
          'Referenciación',
          'Cobranza',
          'Empleados',
          'Rol'
        ];
        break;
      
      case 'COMERCIAL':
        this.views = [
          'Comercialización'
        ];
        break;

      case 'REFERENCIACION':
        this.views = [
          'Referenciación'
        ];
        break;

      case 'COBRANZA':
        this.views = [
          'Cobranza'
        ];
        break;
    }

    this.rolForm = this.views[0];
    this.empleadoGridData = this.loginService.getEmpleados();

    

    
  }

  agregarRegistroReferenciacion(evento: any){
    evento.id = this.refGridData.length + 1;
    this.refGridData.push(evento);
    console.log(evento);
  }

  agregarRegistroCobranza(evento: any){
    evento.forEach((element: any) => {
      this.cobGridData.push(element);
    });
    console.log(this.cobGridData);
  }

  dispararModalRol(){
    const vModaloptions = {
      class: 'modal-m',
      ignoreBackdropClick: true,
      initialState: {
        rolesExistentes: this.rolGridData
      }
    }
    const vModalRef = this.bsModalService.show(
      RolModalComponent,
      vModaloptions
    )
    if(this.subRolModal){
      if(!this.subRolModal.closed){
        this.subRolModal.unsubscribe();
      }
    }

    this.subRolModal = vModalRef?.content?.rolNuevo?.subscribe((dato:any) => {
      if(dato){
        dato.id = this.rolGridData.length + 1;
        this.rolGridData.push(dato);
      }
    })
  }

  dispararModalEmpleado(){
    const vModaloptions = {
      class: 'modal-m',
      ignoreBackdropClick: true,
      initialState: {
        empleadosExistentes: this.empleadoGridData,
        rolesExistentes: this.rolGridData
      }
    }
    const vModalRef = this.bsModalService.show(
      EmpleadoModalComponent,
      vModaloptions
    )
    if(this.subEmplModal){
      if(!this.subEmplModal.closed){
        this.subEmplModal.unsubscribe();
      }
    }

    this.subRolModal = vModalRef?.content?.empleadoNuevo?.subscribe((dato:any) => {
      if(dato){
        dato.id = this.empleadoGridData.length + 1;
        dato.login.id = this.empleadoGridData.length + 1;
        this.empleadoGridData.push(dato);
      }
    })
  }

  dispararModalComercial(){
    const vModaloptions = {
      class: 'modal-m',
      ignoreBackdropClick: true,
      initialState: {
        clientesExistentes: this.clientesExistentes,
        creditoExistentes: this.creditosExistentes,
        empleadosExistentes: this.empleadoGridData
      }
    }
    const vModalRef = this.bsModalService.show(
      ComercializacionModalComponent,
      vModaloptions
    )
    if(this.subEmplModal){
      if(!this.subEmplModal.closed){
        this.subEmplModal.unsubscribe();
      }
    }

    this.subRolModal = vModalRef?.content?.comercialNuevo?.subscribe((dato:any) => {
      if(dato){
        dato.id = this.comercializacionGridData.length + 1;
        this.comercializacionGridData.push(dato);
      }
    })
  }

}
