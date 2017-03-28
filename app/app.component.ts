import { Component } from '@angular/core';

@Component({
  selector: 'our-recipes',
  template: `
  <div class="container">
    <h1>RECIPEEEESSSSSSSS</h1>
    <h3>{{currentFoodMood}} - {{month}}/{{day}}/{{year}}</h3>
    <ul>
      <li [class]="tastinessColor(currentRecipe)" (click)="isBaked(currentRecipe)" *ngFor="let currentRecipe of recipes" >{{currentRecipe.title}} <button (click)='editRecipe()'>Edit</button></li>
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
  recipes: Recipe[] = [
    new Recipe('Chocolate Cake', 'cocoa powder, flour, water, eggs', 'Put it all together and youre good to go', 1),
    new Recipe('Mac and Cheese', 'macaroni and cheese', 'Put it all together and youre good to go', 2),
    new Recipe('Peanut Butter Bars', 'Peanut butter, powdered sugar, butter, crushed graham crackers, melted chocolate chips', 'melt butter, mix together all ingredients except chocolate, put into brownie pan, drizzle chocolate to cover top, put in fridge for 2 hours.', 3)
  ];

  editRecipe() {
    alert("You just requested to edit this recipe!");
  }

  isBaked(clickedRecipe: Recipe) {
    if(clickedRecipe.baked === true) {
      alert("This recipe is baked!");
    } else {
      alert("This recipe is not baked!");
    }
  }

    tastinessColor(currentRecipe){
    if (currentRecipe.tastiness === 1){
      return "bg-danger";
    } else if (currentRecipe.tastiness === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Recipe {
  public baked: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string, public tastiness: number) { }
}
