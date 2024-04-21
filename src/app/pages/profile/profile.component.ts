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
  isVisual = false;
  showDialog() {
    const dialog = document.getElementById('dialog');
    dialog?.classList.remove('hidden');
    dialog?.classList.add('flex');
  }
  hideDialog() {
    this.isVisual = true;
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
  update() {
    const currentRecord = this.recipeList.find(
      (m) => m.id === this.recipeObj.id
    );
    if (currentRecord != undefined) {
      currentRecord.title = this.recipeObj.title;
      currentRecord.types = this.recipeObj.types;
      currentRecord.ingredients = this.recipeObj.ingredients;
      currentRecord.instructions = this.recipeObj.instructions;
    }
    localStorage.setItem('RecipeFinder', JSON.stringify(this.recipeObj));
  }
  // onDelete(id: number) {
  //   const isDelete = confirm('Are you sure want to delete');
  //   if (isDelete) {
  //     const currentRecord = this.recipeList.findIndex((e) => e.id === id);
  //     if (currentRecord !== -1) {
  //       this.recipeList.shift();
  //       localStorage.setItem('RecipeFinder', JSON.stringify(this.recipeObj));
  //     } else {
  //       console.error('Item to delete not found in recipeList');
  //     }
  //   }
  //     // for (let i = 0; i < this.recipeList.length; i++) {
  //     //   if (this.recipeList[i].id == id) {
  //     //     this.recipeList.splice(i, 1);
  //     //   }
  //     // }
  //     localStorage.setItem('RecipeFinder', JSON.stringify(this.recipeObj));
  //   }
  // }
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
