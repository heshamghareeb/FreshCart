import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './common/interceptors/loading.interceptor';
import { HttpRequestInterceptor } from './common/interceptors/httprequest.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppTranslateModule } from './common/modules/app-translate.module';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { CuttextPipe } from "./common/pipes/cuttext.pipe";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    exports: [
    AppTranslateModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        CarouselModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
        }),
        NgxSpinnerModule,
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: HttpLoaderFactory,
        //         deps: [HttpClient]
        //     }
        // }),
        AppTranslateModule.forRoot(),
        CuttextPipe
    ],
})
export class AppModule {}
