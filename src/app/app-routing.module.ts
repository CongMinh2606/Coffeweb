import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[

  { path: 'home', loadChildren: () => import('./Page/home/home.module').then(m => m.HomeModule) },
  { path: 'cart', loadChildren: () => import('./Page/cart/cart.module').then(m => m.CartModule) },
  { path: '', loadChildren: () => import('./app.module').then(m => m.AppModule) },
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
