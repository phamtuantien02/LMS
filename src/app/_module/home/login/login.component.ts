import { Component, OnInit } from '@angular/core';
import { homeService } from '../service/home.service';
import { Router,ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { LoadingSpinnerService } from 'src/app/_core/service/loading-spinner.service';
import { AuthenticationService } from 'src/app/_core/service/authentication.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: homeService, 
              private route: Router,
              private authService:AuthenticationService,
              private loading:LoadingSpinnerService,
              private activateRoute: ActivatedRoute,
              private toastr: ToastrService,
              private fb: FormBuilder,) {
                // redirect to home if already logged in
        if (this.authService.currentUserValue) { 
          this.route.navigate(['/']);
      }
  }
  


  UserInfo : any=[];
  returnUrl: string="/";
  error ='';
  myForm : any;

  ngOnInit(): void {
     this.returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/student/dashboard';

    this.myForm = this.fb.group({
      username : ['', Validators.required],
      password : ['',[Validators.required,Validators.minLength(3)]],
    })
  }
  onSubmit()
  {
        this.loading.showLoaderUntilCompleted(this.authService.login(this.myForm.value.username,this.myForm.value.password))
        .pipe(first()).subscribe((res:any)=>{
            this.route.navigateByUrl("/");
            this.route.navigate([this.returnUrl]).then(() => {window.location.reload();});
        },
        error =>{
          this.error=error;
          this.toastr.error("Invalid username/password! Please re-enter");
        });
  }
}
