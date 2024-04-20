import { NavComponent } from '../../Components/nav/nav.component';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  recipeObj: RecipesDetails = new RecipesDetails();
  recipeList: RecipesDetails[] = [];
  ngOnInit(): void {
    const localData = localStorage.getItem('RecipeFinder');
    if (localData !== null) {
      this.recipeList = JSON.parse(localData);
    }
  }
  showDialog() {
    const dialog = document.getElementById('dialog');
    dialog?.classList.remove('hidden');
    dialog?.classList.add('flex');
  }
  hideDialog() {
    const dialog = document.getElementById('dialog');
    dialog?.classList.add('hidden');
    dialog?.classList.remove('flex');
  }
  save() {
    const isLocalPresent = localStorage.getItem('RecipeFinder');
    if (isLocalPresent !== null) {
      const oldArray = JSON.parse(isLocalPresent);
      this.recipeObj.id = oldArray.length + 1;
      oldArray.push(this.recipeObj);
      localStorage.setItem('RecipeFinder', JSON.stringify(oldArray));
    } else {
      const newArr = [this.recipeObj];
      this.recipeObj.id = 1;
      localStorage.setItem('RecipeFinder', JSON.stringify(newArr));
    }
  }
  onEdit(item: RecipesDetails) {
    this.recipeObj = item;
    this.showDialog();
  }
  onDelete(item: RecipesDetails) {}
}

export class RecipesDetails {
  id: number;
  title: string;
  types: string;
  ingredients: string;
  instructions: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.types = '';
    this.ingredients = '';
    this.instructions = '';
  }
}
