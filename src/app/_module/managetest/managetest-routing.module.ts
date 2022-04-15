import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAlltestComponent } from './pages/test.component';
import { ShowAllTestQuestionPage } from './pages/showallquestions/showallquestions.component';
import { AuthGuard } from 'src/app/_core/AuthGuard/authguard';
const routes: Routes = [
  {
     path: '',
     component: ShowAlltestComponent,
     canActivate: [AuthGuard],
  },
  {
     path:'test',
     component:ShowAlltestComponent,
     canActivate: [AuthGuard],
  },
  {path:'testquestion', component:ShowAllTestQuestionPage,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class testRoutingModule {}
