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
export class AppComponent implements  OnInit {
  constructor(private HttpService:HttpService  ,private AuthService: AuthService){}
  
  // news$:any
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  //   this.news$ = this.HttpService.get();
  // }
  users: any;
 

  ngOnInit(): void{
    onAuthStateChanged(this.AuthService.auth,(users)=>{
if( users != null){
  this.users = users;
}else{
  this.users= !users;
}
    })
  }
  login(){
    this.AuthService.loginWithGoogle().then((res) =>{
      console.log(res)
    })
  }
  logout(){
    this.AuthService.logout();
  }
  
  Coffe:Array<any> = [
    {
      id: 1,
      name: "Cà phê đá",
      price: "20.000 VND",
      image:"../assets/cfda.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },
    {
      id: 2,
      name: "Cà phê sữa đá",
      price:"20.000 VND",
      image:"../assets/caphesua.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },
    {
      id: 3,
      name: "Bạc Xỉu Nóng",
      price: "10.000 VND",
      image:"../assets/bacxiunong.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },
    {
      id: 4,
      name: "Đen Nóng",
      price: "10.000 VND",
      image:"../assets/dennong.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },
    {
      id: 5,
      name: "Espresso Nóng",
      price: "10.000 VND",
      image:"../assets/espressonong.webp",
      weight: "1/ly ",
      describe: "Ngọt/Đắng/Đậm vị cà phê",
      oder: false,
    },{
    id: 6,
    name: "Caramelmacchiato Nóng",
    price: "10.000 VND",
    image:"../assets/caramelmacchiato.webp",
    weight: "1/ly ",
    describe: "Ngọt/Đắng/Đậm vị cà phê",
    oder: false,
  },]

  }
    

  // ];
//  getnameinput(name : any){
//   console.log(name)
//  }

