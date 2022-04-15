import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_core/service/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  isLoggedIn :boolean=false;

  constructor(private authService:AuthenticationService) {
    this.isLoggedIn=this.CheckIfUserLogin();
  }
 
  ngOnInit() {
    this.isLoggedIn=this.CheckIfUserLogin();
  }

  CheckIfUserLogin():boolean{
    if (this.authService.currentUserValue){
      return true;
    }
    return false;
  }
}
