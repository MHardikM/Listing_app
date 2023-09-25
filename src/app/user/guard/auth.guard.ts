import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserveService } from '../service/userserve.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userservise:UserserveService,private router:Router){}
 canActivate(): boolean {
  if(this.userservise.loggedin()){
    return true
  }else{
    this.router.navigate(["user/login"])
    return false
  }
   
 } 
  
}


