import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './services/http.service';
import { Artical } from './models/modelbaidang';
import {  onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

import { state } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private HttpService:HttpService  ,private AuthService: AuthService){}

  // news$:any
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  //   this.news$ = this.HttpService.get();
  // }
  users: any;


//   ngOnInit(): void{
//     onAuthStateChanged(this.AuthService.auth,(users)=>{
// if( users != null){
//   this.users = users;
// }else{
//   this.users= !users;
// }
//     })
//   }
//   login(){
//     this.AuthService.loginWithGoogle().then((res) =>{
//       console.log(res)
//     })
//   }
//   logout(){
//     this.AuthService.logout();
//   }

}

  // ];
//  getnameinput(name : any){
//   console.log(name)
//  }

