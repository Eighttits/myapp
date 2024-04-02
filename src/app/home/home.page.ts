import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  casas = [
    { 
      nombre: 'Casa 1', 
      descripcion: 'Descripción de la casa 1', 
      precio: '$100,000', 
      imagenUrl: '/img/casa.jpeg' 
    },
    { 
      nombre: 'Casa 2', 
      descripcion: 'Descripción de la casa 2', 
      precio: '$150,000', 
      imagenUrl: './image/casa.jpeg' 
    },
    { 
      nombre: 'Casa 3', 
      descripcion: 'Descripción de la casa 3', 
      precio: '$200,000', 
      imagenUrl: '/img/casa.jpeg' 
    },
    // Agrega más casas según sea necesario
  ];


  minombre = "roberto";
  miapellido = "jauregui";

  constructor(private router: Router, private usersService: UsersService) {
    this.usersService.obtenerUsuarios().subscribe(data => {
      console.log(data);
    });
  }

  routerLogin() {
    this.router.navigate(["/menu/login"]);
  }
  routerCamera() {
    this.router.navigate(["/menu/camara"]);
  }
  routerContacts() {
    this.router.navigate(["/menu/contactos"]);
  }
}
