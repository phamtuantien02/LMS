import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../../_share/share.module';
import { lmsHomeComponent } from './lmshome/lmshome.component';
import { HomePage } from './pages/homepage/homepage';
import { PageNotFound } from './pages/pagenotfound/pagenotfound';
import { HomeRoutingModule } from './home-rounting.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LoginPage } from './pages/loginpage/loginpage.component';
import { slideangularComponent } from './lmshome/slideangular/slideangular.component';
import { slidebootstrapComponent } from './lmshome/slidebootstrap/slidebootstrap.component';
import { slidenetcoreComponent } from './lmshome/slidenetcore/slidenetcore.component';
import { slidesqlComponent } from './lmshome/slidesql/slidesql.component';
const COMPONENTS = [
    HomePage,
    PageNotFound,
    lmsHomeComponent,
    LoginComponent,
    LoginPage,
    slideangularComponent,
    slidebootstrapComponent,
    slidenetcoreComponent,
    slidesqlComponent,
];

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
    ],
    declarations: [...COMPONENTS]
})
export class HomeModule { }
