import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem | undefined;

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      {label: 'Galeria', icon: 'pi pi-fw pi-camera', routerLink: ['/galeria']},
      {label: 'Sobre Mí', icon: 'pi pi-fw pi-user', routerLink: ['/sobreMi']},
      {label: 'Descargar APK', icon: 'pi pi-fw pi-file', url: "https://drive.google.com/file/d/1KWR8B2K2-4yYC9Iltvf9sMpirbM4ij1G/view?usp=sharing"},
    ]

    this.activeItem = this.items[0];
  }

  title = 'LandingPage-CuidaAMiMascota';


  

}
