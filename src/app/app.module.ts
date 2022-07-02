import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Map2dComponent } from './map2d/map2d.component';
import { MapglComponent } from './mapgl/mapgl.component';

@NgModule({
  declarations: [
    AppComponent,
    MapglComponent,
    Map2dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
