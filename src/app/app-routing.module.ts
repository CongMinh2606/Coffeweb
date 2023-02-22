import { Auth, getAuth } from '@angular/fire/auth';
import { GuardsoffGuard } from './guards/guardsoff.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';

const routes:Routes=[

  { path: 'home', canActivate:[GuardsoffGuard], loadChildren: () => import('./Page/home/home.module').then(m => m.HomeModule) },
  { path: 'cart', canActivate:[GuardsoffGuard], loadChildren: () => import('./Page/cart/cart.module').then(m => m.CartModule) },

  { path: 'login', loadChildren: () => import('./Page/login/login.module').then(m => m.LoginModule) },

  { path: 'menu', canActivate:[GuardsoffGuard],loadChildren: () => import('./Page/menu/menu.module').then(m => m.MenuModule) },

]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
