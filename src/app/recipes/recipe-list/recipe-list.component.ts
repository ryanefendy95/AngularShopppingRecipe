import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('recipe1', 'recipe1 desc', 'https://picsum.photos/200/?random'),
    new Recipe('recipe2', 'recipe2 desc', 'https://picsum.photos/200/?random'),
    new Recipe('recipe3', 'recipe3 desc', 'https://picsum.photos/200/?random')
  ];

  constructor() { }

  ngOnInit() {
  }

}
