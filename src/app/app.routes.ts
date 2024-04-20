import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddRecipesComponent } from './Components/add-recipes/add-recipes.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
