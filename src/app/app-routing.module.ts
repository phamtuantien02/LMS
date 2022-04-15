import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './_module/home/pages/pagenotfound/pagenotfound';
const routes: Routes = 
[
  {
    path:'',
    loadChildren:() =>import('./_module/home/home.module').then(m=>m.HomeModule)
  },

  {
    path:'student',
    loadChildren:() =>import('./_module/student/student.module').then(m=>m.StudentModule)
  },
  {
    path:'state',
    loadChildren:() =>import('./_module/state/state.module').then(m=>m.StateModule)
  },
  {
    path:'test',
    loadChildren:() =>import('./_module/test/test.module').then(m=>m.TestModule)
  },
  {
    path:'course',
    loadChildren:() =>import('./_module/course/course.module').then(m=>m.CourseModule)
  },
  {
    path:'managetest',
    loadChildren:() =>import('./_module/managetest/managetest.module').then(m=>m.managetestModule)
  },
  {
    path:'courseslide',
    loadChildren:() =>import('./_module/courseslide/slide.module').then(m=>m.SlideModule)
  },
  {
    path:'**',component:PageNotFound
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
