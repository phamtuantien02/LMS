import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../../_share/share.module';
import { CourseRoutingModule } from './course-routing.module';
import { AllCoursePage } from './pages/course.component';
import { ShowCourseComponent } from './showcourse/show-course.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { AssigntestComponent } from './assigntest/assigntest.component';
import { AssignslideComponent } from './assignslide/assignslide.component';
import { ViewmaterialComponent } from './viewmaterial/viewmaterial.component';
import { ShowmaterialComponent } from './pages/showmaterial/showmaterial.component';
import { CoursetestwelcomeComponent } from './coursetestwelcome/coursetestwelcome.component';
import { ShowtestwelcomeComponent } from './pages/showtestwelcome/showtestwelcome.component';
const COMPONENTS = [
    AllCoursePage,
    ShowCourseComponent,
    AddEditCourseComponent,
    AssigntestComponent, 
    AssignslideComponent, 
    ViewmaterialComponent, 
    ShowmaterialComponent, 
    CoursetestwelcomeComponent, 
    ShowtestwelcomeComponent
];

@NgModule({
    imports: [
        CommonModule,
        CourseRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [...COMPONENTS, ]
})
export class CourseModule { }
