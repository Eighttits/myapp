import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  minombre = "roberto";
  miapellido = "jauregui";

  constructor(private router: Router) {}

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
