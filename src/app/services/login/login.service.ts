import { Injectable } from '@angular/core';

const ROL = 'permission_list';

const ID_EMPLEADO = 'id_empleado';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  empleados = [
    {
      "id": 1,
      "dni": 1237546987,
      "nombre": 'Samuel',
      "apellido": 'Padilla',
      "telefono": 3235447864,
      "direccion": 'Kra 34 # 23 345',
      "correo": "Sam@ejemplo.com",
      "login": {
        "id":1,
        "usuario": 'super_user',
        "contraseña": 'Finance1234',
        "rol": {
          "id": 1,
          "nombre_rol": 'SUPER_USER',
          "descripcion": 'descripcion SUPER_USER'
        }
      }
    },
    {
      "id": 2,
      "dni": 1237543987,
      "nombre": 'Charls',
      "apellido": 'Darwin',
      "telefono": 3235427864,
      "direccion": 'Kra 33 # 23 345',
      "correo": "XXX@ejemplo.com",
      "login": {
        "id":2,
        "usuario": 'comercial',
        "contraseña": 'Finance1234',
        "rol": {
          "id": 2,
          "nombre_rol": 'COMERCIAL',
          "descripcion": 'descripcion COMERCIAL'
        }
      }
    },
    {
      "id": 3,
      "dni": 1237543887,
      "nombre": 'Vlad',
      "apellido": 'Empalor',
      "telefono": 3231427864,
      "direccion": 'Kra 63 # 23 345',
      "correo": "YYY@ejemplo.com",
      "login": {
        "id": 3,
        "usuario": 'referenciacion',
        "contraseña": 'Finance1234',
        "rol": {
          "id": 3,
          "nombre_rol": 'REFERENCIACION',
          "descripcion": 'descripcion REFERENCIACION'
        }
      }
    },
    {
      "id": 4,
      "dni": 4237543887,
      "nombre": 'Avril',
      "apellido": 'Levigne',
      "telefono": 3231427868,
      "direccion": 'Kra 67 # 23 345',
      "correo": "ZZZ@ejemplo.com",
      "login": {
        "id": 4,
        "usuario": 'cobranza',
        "contraseña": 'Finance1234',
        "rol": {
          "id": 4,
          "nombre_rol": 'COBRANZA',
          "descripcion": 'descripcion COBRANZA'
        }
      }
    }
  ]

  constructor() { }

  login(usuario: string, contraseña:string): boolean{
    let successLogin = false;

    if(usuario === 'super_user' && contraseña === 'Finance1234'){
      localStorage.setItem(ROL, 'SUPER_USER');
      localStorage.setItem(ID_EMPLEADO, '1');
      successLogin = true;
    }else if(usuario === 'comercial' && contraseña === 'Finance1234'){
      localStorage.setItem(ROL, 'COMERCIAL');
      localStorage.setItem(ID_EMPLEADO, '2');
      successLogin = true;
    }else if(usuario === 'referenciacion' && contraseña === 'Finance1234'){
      localStorage.setItem(ROL, 'REFERENCIACION');
      localStorage.setItem(ID_EMPLEADO, '3');
      successLogin = true;
    }else if(usuario === 'cobranza' && contraseña === 'Finance1234'){
      localStorage.setItem(ROL, 'COBRANZA');
      localStorage.setItem(ID_EMPLEADO, '4');
      successLogin = true;
    }

    return successLogin;
  }

  getRol(){
    return localStorage.getItem(ROL);
  }

  getEmpleados(){
    return this.empleados;
  }

  addEmpleado(empleado: any){
    this.empleados.push(empleado);
  }

  getIdEmpleado(){
    return localStorage.getItem(ID_EMPLEADO);
  }


}
