import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStudentComponent } from './pages/allstudents/student.component';
import { StudentdashboardComponent } from './pages/studentdashboard/studentdashboard.component';
import { AuthGuard } from 'src/app/_core/AuthGuard/authguard';
const routes: Routes = [
  {
     path: '',component: AllStudentComponent,
     canActivate: [AuthGuard],
  },
  {
     path:'student',component:AllStudentComponent,
     canActivate: [AuthGuard],
  },
  {
    path:'dashboard',component:StudentdashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
