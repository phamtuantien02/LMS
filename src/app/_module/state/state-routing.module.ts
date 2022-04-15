import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllStateComponent } from './pages/allstates/state.component';
import { AuthGuard } from 'src/app/_core/AuthGuard/authguard';
const routes: Routes = [
  {
     path: '',
     component: ShowAllStateComponent,
     canActivate: [AuthGuard],
  },
  {
     path:'state',
     component:ShowAllStateComponent,
     canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule {}
