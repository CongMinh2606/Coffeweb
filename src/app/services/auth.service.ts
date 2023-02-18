import { Injectable } from '@angular/core';
import { Auth,GoogleAuthProvider,signInWithPopup, signOut, User, } from '@angular/fire/auth';
import { AUTH_PROVIDER_NAME } from '@angular/fire/auth/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
users:User|undefined
  constructor(public auth: Auth) { }
 async loginWithGoogle(){
    let provider = new GoogleAuthProvider();
// signInWithPopup(this.auth ,provider)
  await  signInWithPopup(this.auth, provider)
}
async logout(){

 await this.auth.signOut();
  
}
}