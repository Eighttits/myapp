import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'componentes',
        loadChildren: () => import('../pages/componentes/componentes.module').then( m => m.ComponentesPageModule)
      },
      {
        path: 'camara',
        loadChildren: () => import('../pages/camara/camara.module').then( m => m.CamaraPageModule)
      },
      {
        path: 'contactos',
        loadChildren: () => import('../pages/contactos/contactos.module').then( m => m.ContactosPageModule)
      },
      {
        path: 'casa',
        loadChildren: () => import('../pages/casa/casa.module').then( m => m.CasaPageModule)
      },
        ],
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
