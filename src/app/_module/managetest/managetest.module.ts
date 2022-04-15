import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from '../../_share/share.module';
import { ShowtestComponent } from './showtest/show-test.component';
import { AddEdittestComponent } from './add-edit-test/add-edit-test.component';
import { ShowAlltestComponent } from './pages/test.component';
import { testRoutingModule } from './managetest-routing.module';
import { AllquestionsComponent } from './allquestions/allquestions.component';
import { AddeditquestionComponent } from './allquestions/addeditquestion/addeditquestion.component';
import { ShowAllTestQuestionPage } from './pages/showallquestions/showallquestions.component';
import { AddanswerComponent } from './allquestions/addanswer/addanswer.component';
import { ViewallanswerComponent } from './allquestions/viewallanswer/viewallanswer.component';
import { AssignquestionComponent } from './assignquestion/assignquestion.component';

const COMPONENTS = [
    ShowtestComponent,
    AddEdittestComponent,
    ShowAlltestComponent,
    AllquestionsComponent, 
    AddeditquestionComponent,
    ShowAllTestQuestionPage
];

@NgModule({
    imports: [
        CommonModule,
        testRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [...COMPONENTS, AddanswerComponent, ViewallanswerComponent, AssignquestionComponent ]
})
export class managetestModule { }
