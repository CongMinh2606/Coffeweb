import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { ModuleshareModule } from 'src/app/sharemodule/moduleshare/moduleshare.module';
@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ModuleshareModule
  ]
})
export class CartModule { }
