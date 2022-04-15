import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { AuthGuard } from 'src/app/_core/AuthGuard/authguard';
const routes: Routes = [
 {
   path:'testquestion', component:QuestionComponent,
   canActivate: [AuthGuard],
},
{
  path:'testquestion/:TestID', component:QuestionComponent,
  canActivate: [AuthGuard],
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
