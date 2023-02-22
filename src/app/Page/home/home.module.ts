import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import { ModuleshareModule } from 'src/app/sharemodule/moduleshare/moduleshare.module';
import { ToolbarComponent } from 'src/app/Component/toolbar/toolbar.component';
@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    ModuleshareModule
  ]
})
export class HomeModule { }
