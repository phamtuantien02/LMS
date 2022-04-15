import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { lmsHomeComponent } from './lmshome/lmshome.component';
import { LoginPage } from './pages/loginpage/loginpage.component';
import { slideangularComponent } from './lmshome/slideangular/slideangular.component';
import { slidebootstrapComponent } from './lmshome/slidebootstrap/slidebootstrap.component';
import { slidenetcoreComponent } from './lmshome/slidenetcore/slidenetcore.component';
import { slidesqlComponent } from './lmshome/slidesql/slidesql.component';

const routes: Routes = [
  {
     path: '',
     component: lmsHomeComponent,
  },
  {
    path: 'angularslide',
    component: slideangularComponent,
 },
 {
   path: 'bootstrapslide',
   component: slidebootstrapComponent,
},
{
   path: 'netcoreslide',
   component: slidenetcoreComponent,
},
{
   path: 'sqlslide',
   component: slidesqlComponent,
},
 {
    path:'login',component:LoginPage,
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
