import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ChartModule,
  ],
  providers: [ Meta ], bootstrap: [AppComponent],
})
export class AppModule {}
