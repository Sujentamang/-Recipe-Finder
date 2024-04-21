import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavComponent } from './Components/nav/nav.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    Component,
    HomepageComponent,
    NavComponent,
    RouterModule,
    RouterOutlet,
    CommonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppComponent {}
