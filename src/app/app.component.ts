import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private userService: UserService, private auth: AuthService, route : Router){
    auth.user$.subscribe(user =>
      {
        if(user) {
          //1. here when the user logs in we need to store them in the db
          /* note: Anytime we want to work with firebase we should encapsulate our code inside a service to 
          have better separation of concerns and testability */
          userService.save(user);

          let returnUrl = localStorage.getItem('returnUrl');
          route.navigateByUrl(returnUrl);
        }        
      });
  }
}
