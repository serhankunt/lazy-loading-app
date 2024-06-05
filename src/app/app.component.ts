import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink,RouterLinkActive],
  template:`
  <a routerLink="/c1" routerLinkActive>C1 Component</a> || 
  <a routerLink="/c2" routerLinkActive>C2 Component</a> || 
  <a routerLink="/c3" routerLinkActive>C3 Component</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
