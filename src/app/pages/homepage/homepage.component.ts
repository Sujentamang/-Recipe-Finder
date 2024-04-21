import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavComponent } from '../../Components/nav/nav.component';
import { RecipesComponent } from './components/bestRecipes/recipes.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroSectionComponent,
    NavComponent,
    RecipesComponent,
    FooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
