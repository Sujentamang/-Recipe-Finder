import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipelistComponent } from '../recipelist/recipelist.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RouterModule, RecipelistComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  tabs: string[] = ['Break Fast', 'Dinner', 'Snacks', 'Festive Dinner'];
  activatedTabIndex: number = 0;

  recipeObj: RecipesDetails = new RecipesDetails();
  recipeList: RecipesDetails[] = [];

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
