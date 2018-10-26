import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 10)
  ];
  private ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredientsChanged() {
    return this.ingredientsChanged;
  }
}
