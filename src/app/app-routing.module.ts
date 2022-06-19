import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { GaleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { OpinionesComponent } from './opiniones/opiniones.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sobreMi',
    component: AboutMeComponent
  },
  {
    path: 'galeria',
    component: GaleryComponent
  },
  {
    path: 'opiniones',
    component: OpinionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
