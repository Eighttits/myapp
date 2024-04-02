import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  password: string;


  public usuariosValidos = [
    { usuario: 'usuario1', password: 'password1' },
    { usuario: 'usuario2', password: 'password2' },
    // Agrega más usuarios si es necesario
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(["/home"]);
  }


  ingresar() {
    console.log('Intentando iniciar sesión con usuario:', this.usuario, 'y contraseña:', this.password);
    const usuarioValido = this.usuariosValidos.find(user => user.usuario === this.usuario && user.password === this.password);
    if (usuarioValido) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(["/menu/home"]);
    } else {
      console.log('Usuario o contraseña inválidos');
    }
  }
  


  

}
