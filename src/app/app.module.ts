import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Map2dComponent } from './map2d/map2d.component';
import { MapglComponent } from './mapgl/mapgl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LeftSiderComponent } from './leftSider/leftSider.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LeftSiderComponent,
    FooterComponent,
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
