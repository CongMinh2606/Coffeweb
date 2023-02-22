import { ListComponent } from './../../Component/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

import { ModuleshareModule } from 'src/app/sharemodule/moduleshare/moduleshare.module';
@NgModule({
  declarations: [
    MenuComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ModuleshareModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
