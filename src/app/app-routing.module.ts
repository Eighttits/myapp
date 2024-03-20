import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'componentes',
  //   loadChildren: () => import('./pages/componentes/componentes.module').then( m => m.ComponentesPageModule)
  // },
  // {
  //   path: 'camara',
  //   loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  // },
  // {
  //   path: 'contactos',
  //   loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  // },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
