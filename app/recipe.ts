class Recipe {
  baked: boolean = false;

  constructor(public title: string, public ingredients: string, public directions: string){}

  markBaked(){
    this.baked = true;
  }
}

var recipes: Recipe[] = [];
recipes.push(new Recipe('Chocolate Cake', 'cocoa powder, flour, water, eggs', 'Put it all together and youre good to go'));
recipes.push(new Recipe('Mac and Cheese', 'macaroni and cheese', 'Put it all together and youre good to go'));
recipes.push(new Recipe('Peanut Butter Bars', 'Peanut butter, powdered sugar, butter, crushed graham crackers, melted chocolate chips', 'melt butter, mix together all ingredients except chocolate, put into brownie pan, drizzle chocolate to cover top, put in fridge for 2 hours.'));

recipes[0].markBaked();

for(var recipe of recipes){
  console.log(recipe);
}
