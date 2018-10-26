import { Ingredient } from 'src/shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

// manage recipes
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('recipe1', 'recipe1 desc', 'https://picsum.photos/200/?random', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('recipe2', 'recipe2 desc', 'https://picsum.photos/200/?random', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('recipe3', 'recipe3 desc', 'https://picsum.photos/200/?random', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ])
  ];
  private recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeSelected() {
    return this.recipeSelected;
  }
}
