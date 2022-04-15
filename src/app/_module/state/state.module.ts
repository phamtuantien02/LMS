import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from '../../_share/share.module';
import { ShowStateComponent } from '../state/show-state/show-state.component';
import { AddEditStateComponent } from '../state/add-edit-state/add-edit-state.component';
import { ShowAllStateComponent } from '../state/pages/allstates/state.component';
import { StateRoutingModule } from './state-routing.module';
const COMPONENTS = [
    ShowStateComponent,
    AddEditStateComponent,
    ShowAllStateComponent
];

@NgModule({
    imports: [
        CommonModule,
        StateRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [...COMPONENTS]
})
export class StateModule { }
