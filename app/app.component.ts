import { Component } from '@angular/core';

@Component({
  selector: 'our-recipes',
  template: `
  <div class="container">
    <h1>RECIPEEEESSSSSSSS</h1>
    <h3>{{currentFoodMood}} - {{month}}/{{day}}/{{year}}</h3>
    <ul>
      <li>{{firstRecipe.title}}, {{firstRecipe.ingredients}}, {{firstRecipe.directions}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFoodMood: string = "Spicy";
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstRecipe: Recipe = new Recipe("Chocolate Cake", "cocoa powder, flour, water, eggs", "Put it all together and youre good to go");
}

export class Recipe {
  public baked: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
