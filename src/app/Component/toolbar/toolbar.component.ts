import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  onAuthStateChanged } from '@angular/fire/auth';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor( private AuthService: AuthService ){}
  users: any;


  ngOnInit(): void{
    onAuthStateChanged(this.AuthService.auth,(users)=>{
      console.log(users)
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
}
