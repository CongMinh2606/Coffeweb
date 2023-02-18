import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ModuleshareModule } from './sharemodule/moduleshare/moduleshare.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    
 
  
    
  
  ],
  imports: [
  
    AppRoutingModule,
    BrowserModule,
    ModuleshareModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
