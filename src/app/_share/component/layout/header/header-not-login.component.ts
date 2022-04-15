import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-not-login',
    templateUrl: './header-not-login.component.html'
})

export class HeaderNotLoginComponent {
  constructor(private route: Router) { }

  /********************************************************************************/
  onLogin() {
    this.route.navigateByUrl("/login");
    }
}

