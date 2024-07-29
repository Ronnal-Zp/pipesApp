import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { registerLocaleData } from "@angular/common";
import localeEsEC from "@angular/common/locales/es-EC";
import localeFrCA from "@angular/common/locales/fr-CA";

registerLocaleData(localeEsEC);
registerLocaleData(localeFrCA);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-EC' } // idioma global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
