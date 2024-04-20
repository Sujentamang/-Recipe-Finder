import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavComponent } from './Components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HomepageComponent,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styles: '',
})
export class AppComponent {}
