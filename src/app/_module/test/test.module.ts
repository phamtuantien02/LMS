import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from '../../_share/share.module';
import { QuestionComponent } from './question/question.component';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { TestRoutingModule } from './test-routing.module';

const COMPONENTS = [
    QuestionComponent,
    ChangeBgDirective
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TestRoutingModule
    ],
    declarations: [...COMPONENTS]
})
export class TestModule { }
