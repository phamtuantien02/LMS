import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursePage } from './pages/course.component';
import { ShowmaterialComponent } from './pages/showmaterial/showmaterial.component';
import { ShowtestwelcomeComponent } from './pages/showtestwelcome/showtestwelcome.component';
import { AuthGuard } from 'src/app/_core/AuthGuard/authguard';
const routes: Routes = [
  {
     path: '',
     component: AllCoursePage,
     canActivate: [AuthGuard],
  },
  {
    path:'showmaterial',
    component:ShowmaterialComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'showmaterial/:CourseID',
    component:ShowmaterialComponent,
    canActivate: [AuthGuard],
  },
  
  {
    path:'showtestwelcome',
    component:ShowtestwelcomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'showtestwelcome/:CourseID',
    component:ShowtestwelcomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {}
