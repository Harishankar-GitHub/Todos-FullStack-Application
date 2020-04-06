import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardCodedAuthenticationService: HardcodedAuthenticationService, private router: Router,
    private basicAuthenticationService : BasicAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.hardCodedAuthenticationService.isUserLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
//   {
//     if(this.basicAuthenticationService.isUserLoggedIn())
//     {
//       return true;
//     }
//     else
//     {
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
}
