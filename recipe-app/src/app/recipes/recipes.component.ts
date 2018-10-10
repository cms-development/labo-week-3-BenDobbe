import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
// import * as data from '../json-files/recipes.json';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  // allRecipes: Recipe[];
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
   }
  ngOnInit() {
    this.getRecipes();
  }


  getRecipes(): void {
    this.recipeService.getRecipes()
        // .subscribe(recipes => this.recipes = recipes);
         .subscribe( recipes => this.recipes = recipes );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.recipeService.addRecipe({ name } as Recipe)
      .subscribe(recipe => {
        this.recipes.push(recipe);
      });
  }
  delete(recipe: Recipe): void {
    this.recipes = this.recipes.filter(h => h !== recipe);
    this.recipeService.deleteRecipe(recipe).subscribe();
  }

}
