import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //3.after coming back from google we need to read local storage extract the returnUrl and navigate user accordingly
  constructor(private auth: AuthService, route : Router){
    auth.user$.subscribe(user =>
      {
        if(user) {
          let returnUrl = localStorage.getItem('returnUrl');
          route.navigateByUrl(returnUrl);
        }        
      });
  }
}
