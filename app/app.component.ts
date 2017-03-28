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
    <div>
     <h3>{{selectedRecipe.title}}</h3>
     <p>Recipe Baked? {{selectedRecipe.baked}}</p>
    <h3>Edit Recipe</h3>
    <label>Enter Recipe title:</label>
    <input [(ngModel)]="selectedRecipe.title">
    <label>Enter Recipe ingredients:</label>
    <input [(ngModel)]="selectedRecipe.ingredients">
    <label>Enter Recipe directions:</label>
    <input [(ngModel)]="selectedRecipe.directions">
     <label>Enter Recipe Tastiness Level (1-3):</label>
     <br>
     <input type="radio" [(ngModel)]="selectedRecipe.tastiness" [value]="1">1 (Low Tastiness)<br>
     <input type="radio" [(ngModel)]="selectedRecipe.tastiness" [value]="2">2 (Medium Tastiness)<br>
     <input type="radio" [(ngModel)]="selectedRecipe.tastiness" [value]="3">3 (High Tastiness)
    </div>
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

  selectedRecipe: Recipe = this.recipes[0];

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
