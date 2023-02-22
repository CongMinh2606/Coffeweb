
import { LoginComponent } from './Page/login/login.component';
import { HomeComponent } from './Page/home/home.component';

import { newReducer } from './reducers/news.reducer';

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

import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { New, } from './effects/news.effects';
import { ItemComponent } from './Component/item/item.component';
import { ListComponent } from './Component/list/list.component';
import { MenuComponent } from './Page/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,


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
    StoreModule.forRoot({new:newReducer}, {}),
    EffectsModule.forRoot([New]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
