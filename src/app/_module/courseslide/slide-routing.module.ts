import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllSlidePages } from './pages/slide.component';
const routes: Routes = [
  {
     path: '',
     component: ShowAllSlidePages,
  },
  {
     path:'Slide',
     component: ShowAllSlidePages,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlideRoutingModule {}
