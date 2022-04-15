import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from '../../_share/share.module';
import { ShowStudentComponent } from './show-student/show-student.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { StudentRoutingModule } from './student-routing.module';
import { AllStudentComponent } from './pages/allstudents/student.component';
import { AssigncourseComponent } from './assigncourse/assigncourse.component';
import { CourseService } from '../course/service/course.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentdashboardComponent } from './pages/studentdashboard/studentdashboard.component';
const COMPONENTS = [
    ShowStudentComponent,
    AddEditStudentComponent,
    AllStudentComponent
];

@NgModule({
    imports: [
        CommonModule,
        StudentRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],

    declarations: [...COMPONENTS, AssigncourseComponent, DashboardComponent, StudentdashboardComponent]
})
export class StudentModule { }
