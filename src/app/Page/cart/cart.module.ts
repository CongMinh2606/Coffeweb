import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { ItemComponent } from 'src/app/Component/item/item.component';
import { ModuleshareModule } from 'src/app/sharemodule/moduleshare/moduleshare.module';
@NgModule({
  declarations: [
    CartComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ModuleshareModule
  ]
})
export class CartModule { }
