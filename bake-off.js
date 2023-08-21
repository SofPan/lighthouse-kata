const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // toggle checks for ingredients at both bakeries.
  let bakeryAHas = false;
  let bakeryBHas = false;
  for (const recipe of recipes){
    for (const ing of recipe.ingredients){
      if (bakeryA.includes(ing)){
        bakeryAHas = true;
      } else if (bakeryB.includes(ing)){
        bakeryBHas = true;
      } else {
        // if neither bakery has the ingredient reset both to false.
        bakeryAHas = false;
        bakeryBHas = false;
      }
      // If both bakeries have an ingredient, return the recipe name;
      if (bakeryAHas && bakeryBHas){
        return recipe.name;
      }
    }
  }

  return recipeName;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));