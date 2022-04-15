import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderLoggedinComponent } from './component/layout/header/header-loggedin.component';
import { HeaderNotLoginComponent } from './component/layout/header/header-not-login.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';
import { RoundPipe } from './pipe/round.pipe';
import { CapitalizeFirstPipe } from './pipe/initcapitial.pipe';
import { LoadingspinnerComponent } from './component/loadingspinner/loadingspinner.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderLoggedinComponent,
    HeaderNotLoginComponent,
    HeaderComponent,
    FooterComponent,
    SanitizeHtmlPipe,
    RoundPipe,
    CapitalizeFirstPipe,
    LoadingspinnerComponent
  ],
  exports: [
    CommonModule,
    HeaderLoggedinComponent,
    HeaderNotLoginComponent,
    HeaderComponent,
    FooterComponent,
    SanitizeHtmlPipe,
    RoundPipe,
    CapitalizeFirstPipe,
    LoadingspinnerComponent
  ]
})

export class SharedModule {
}
