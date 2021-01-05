import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'room',
    pathMatch: 'full'
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room-board/room-board.module').then( m => m.RoomBoardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'roomdetails/:id',
    loadChildren: () => import('./pages/room-details/room-details.module').then( m => m.RoomDetailsPageModule)
  },
  {
    path: 'customerdetails',
    loadChildren: () => import('./pages/customer-details/customer-details.module').then( m => m.CustomerDetailsPageModule)
  },
  {
    path: 'reservation/:id',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
