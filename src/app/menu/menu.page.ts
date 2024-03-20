import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages:any = [
    {
      title: 'inicio',
      name: 'menu/home',
      url: '/menu/home',
      icon: 'home-outline'
    },
    {
      title: 'contactos',
      name: 'menu/contactos',
      url: '/menu/contactos',
      icon: 'people-circle-outline'
    },
    {
      title: 'camara',
      name: 'menu/camara',
      url: '/menu/camara',
      icon: 'camera-outline'
    }
  ]

  constructor(private router: Router) { }

  sendPage(p: any) { // Corrige la definición de la función sendPage
    this.router.navigate([p.url]); // Navega a la URL definida en el objeto p
  }

  ngOnInit() {
    console.log("");
  }

}
