import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vUsuario!: any;
  vContrasena!: any;

  loginFrom!: FormGroup;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.constructFrom();
  }

  constructFrom(){
    this.loginFrom = new FormGroup({
        usuario: new FormControl(''),
        contraseña: new FormControl('')
      }
    );
  }

  onLogin(){
    const usuario = this.loginFrom.get('usuario')?.value;
    const contraseña = this.loginFrom.get('contraseña')?.value;
    console.log(usuario, contraseña);

    const successLogin = this.loginService.login(usuario, contraseña);
    console.log(successLogin);
    if(successLogin){
      this.router.navigate(['/finance']);
    }
    
  }

  

  



}
