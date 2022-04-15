import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SharedModule } from './_share/share.module';
import { CoreModule } from './_core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor } from './_core/interceptors/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    NgbModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1500,
      progressBar: true,
      progressAnimation: 'decreasing',
      preventDuplicates:true
  }),
  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
