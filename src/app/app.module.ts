import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Map2dComponent } from './map2d/map2d.component';
import { MapglComponent } from './mapgl/mapgl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapglComponent,
    Map2dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: './' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
