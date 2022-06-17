import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { GaleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
