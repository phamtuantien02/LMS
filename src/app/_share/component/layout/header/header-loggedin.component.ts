import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_module/student/service/student.service';
import { AuthenticationService } from 'src/app/_core/service/authentication.service';
@Component({
    selector: 'app-header-loggedin',
    templateUrl: './header-loggedin.component.html'
})

export class HeaderLoggedinComponent implements OnInit{
  constructor(private route: Router, 
              private authService: AuthenticationService) { 
                this.studentFullname=this.authService.currentUserValue.FirstName + " "+ this.authService.currentUserValue.LastName;
              }
  
  studentFullname:string="";
  onLogout() {
     this.authService.logout();
  }

  ngOnInit(): void {
    const student=this.authService.currentUserValue;
     this.studentFullname=student.FirstName + " "+ student.LastName;
  }
}

