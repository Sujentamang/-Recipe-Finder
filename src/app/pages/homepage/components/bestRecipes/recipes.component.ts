import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipelistComponent } from '../recipelist/recipelist.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RecipelistComponent,
    HeroSectionComponent,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  @Input() hello: string = '';

  tabs: string[] = ['Break Fast', 'Dinner', 'lunch', 'Festive Dinner'];
  activatedTabIndex: number = 0;

  recipeObj: RecipesDetails = new RecipesDetails();
  recipeList: RecipesDetails[] = [];
  searchText: any;
  receiveMessage($event: any) {
    this.searchText = $event;
  }
  constructor() {
    const joinedString = this.recipeList.join(', ');
    console.log(joinedString);
    this.tabs.forEach((element) => {
      const index = element.indexOf(joinedString);
      if (index !== -1) {
        const itemIndex = index;
        console.log(itemIndex);
      }
    });
  }
  ngOnInit(): void {
    const localData = localStorage.getItem('RecipeFinder');
    if (localData !== null) {
      this.recipeList = JSON.parse(localData);
    }
  }

  tabChange(tabIndex: number) {
    // debugger;
    this.activatedTabIndex = tabIndex;
  }
}
export class RecipesDetails {
  title: string;
  types: string;
  description: string;

  constructor() {
    this.title = '';
    this.types = '';
    this.description = '';
  }
}
