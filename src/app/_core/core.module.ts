import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestquestionService } from './service/test';
import { ApiService } from './service/api.service';
import { LoadingSpinnerService } from './service/loading-spinner.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
const PROVIDERS_LIST= [
    TestquestionService,
    ApiService,
    LoadingSpinnerService
];

/*********************************************************************** */
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...PROVIDERS_LIST,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  declarations: []
})

/*********************************************************************** */
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
