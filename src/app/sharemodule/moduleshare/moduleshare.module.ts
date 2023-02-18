import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { SaleComponent } from 'src/app/Component/sale/sale.component';
import { ListComponent } from '../../Component/list/list.component';


@NgModule({
  declarations: [
    ListComponent,
    
    
    SaleComponent
  ],
  imports: [
    CommonModule,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatInputModule
  ], exports:[
   
    SaleComponent,
    ListComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatInputModule
  ]
})
export class ModuleshareModule { }
