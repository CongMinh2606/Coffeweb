import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { onAuthStateChanged } from '@firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Auth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class GuardsoffGuard implements CanActivate, CanActivateChild {
  router: any;
  constructor(private AuthService: AuthService, private auth: Auth){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise ((resovle,reject) =>{
        onAuthStateChanged(this.AuthService.auth,(users)=>{
          if( users != null){
            resovle (true)
            this.AuthService.users = users;
          }else {
            window.alert("LOGIN PLEASE")
            resovle(false);
            this.AuthService.users != users;
            this.router.nagative(['home'])

          }


      });
   });
  }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

}
