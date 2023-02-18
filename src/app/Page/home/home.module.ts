import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import { ModuleshareModule } from 'src/app/sharemodule/moduleshare/moduleshare.module';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    ModuleshareModule
  ]
})
export class HomeModule { }
