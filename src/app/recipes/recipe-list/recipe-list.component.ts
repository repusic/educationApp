import { Component,OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Meal','This is a tasty test description','https://www.foodista.com/sites/default/files/Shakshuka-Recipe-with-Red-Enchilada-Sauce-1.jpg'),
    new Recipe('A Second Test Meal','This is lovely meal for sure','https://3.bp.blogspot.com/-PQwfK99ZPQg/TkrJmNzp7nI/AAAAAAAAF_o/LQj_JgTIsjY/s1600/004.JPG')
  ];

  constructor(){

  }
  ngOnInit(){

  }
}
