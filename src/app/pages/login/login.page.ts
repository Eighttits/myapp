import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario = "";
  public password = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(["/home"]);
  }

  ingresar(){
    console.log("usuario: " + this.usuario +"      Contraseña: "+ this.password);
  }

}
