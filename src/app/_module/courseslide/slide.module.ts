import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../../_share/share.module';
import { AddEditSlideComponent } from './add-edit-slide/add-edit-slide.component';
import { ShowSlideComponent } from './showslide/show-slide.component';
import { SlideRoutingModule } from './slide-routing.module';
import { ShowAllSlidePages } from './pages/slide.component';

const COMPONENTS = [
    ShowSlideComponent,
    AddEditSlideComponent,
    ShowAllSlidePages
];

@NgModule({
    imports: [
        CommonModule,
        SlideRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [...COMPONENTS]
})
export class SlideModule { }
