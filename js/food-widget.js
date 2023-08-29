// Function to display a recipe
function displayRecipe(recipe, id) {
  const recipeSection = document.getElementById(id);
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe");

  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.strMealThumb;

  
  const recipeTitle = document.createElement("h2");
  recipeTitle.textContent = recipe.strMeal;
  
  const youtubeLink = document.createElement("a");
  youtubeLink.href = recipe.strYoutube;
  youtubeLink.target = "_blank";
  const youtubeIcon = document.createElement("img");
  youtubeIcon.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1200px-YouTube_full-color_icon_%282017%29.svg.png";
  youtubeIcon.classList.add("youtube-icon");
  youtubeLink.appendChild(youtubeIcon);

  
  const ingredientsList = document.createElement("ol");
  ingredientsList.classList.add("ingredients-list");
  ingredientsList.textContent = "Ingredients: ";
  
  const instructionsPara = document.createElement("div");
  instructionsPara.textContent = "Instructions: " + recipe.strInstructions;
  
  const recipeContent = document.createElement("div");
  recipeContent.classList.add("recipe-content");
  recipeContent.appendChild(ingredientsList);
  recipeContent.appendChild(instructionsPara);
  
  const recipeLeft = document.createElement("div");
  recipeLeft.classList.add("recipe-left");
  recipeLeft.appendChild(recipeTitle);
  recipeLeft.appendChild(recipeImage);
  recipeLeft.appendChild(youtubeLink);

  recipeDiv.appendChild(recipeLeft);
  recipeDiv.appendChild(recipeContent);

  recipeSection.appendChild(recipeDiv);
}

function displayCategory(category, id) {

  const categorySection = document.getElementById(id);

  const catName = document.createElement("div");
  catName.classList.add("category-list");
  catName.addEventListener("click", function(){
    //delete previous recipes list
    const recipeSection = document.getElementById("category");
    recipeSection.innerHTML = "";
    fetchbyCategory(category.strCategory).then((recipes) => {
      recipes.forEach((recipe) => {
        displayCategorySearch(recipe, "category");
      });
    });
  });
  
  catName.textContent = category.strCategory;
  
  categorySection.appendChild(catName);

}

function displayCategorySearch(recipe, id) {
  const recipeSection = document.getElementById(id);
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("category");

  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.strMealThumb;

  const recipeTitle = document.createElement("h3");
  recipeTitle.textContent = recipe.strMeal;

  recipeDiv.appendChild(recipeImage);
  recipeDiv.appendChild(recipeTitle);
  recipeSection.appendChild(recipeDiv);

}

displayIngredients = (ingredients, id) => {
  const ingredientsSection = document.getElementById(id);
  const ingredName = document.createElement("div");

  ingredName.classList.add("ingred-list");
  ingredName.addEventListener("click", function(){
    //delete previous recipes list
    const recipeSection = document.getElementById("ingredient");
    recipeSection.innerHTML = "";
    fetchbyIngredients(ingredients.strIngredient).then((recipes) => {
      recipes.forEach((recipe) => {
        displayIngredSearch(recipe, "ingredient");
      });
    });
  });
  
  ingredName.textContent = ingredients.strIngredient;
  
  ingredientsSection.appendChild(ingredName);
}

function displayIngredSearch(recipe, id) {
  const recipeSection = document.getElementById(id);
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("ingredient");

  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.strMealThumb;

  const recipeTitle = document.createElement("h3");
  recipeTitle.textContent = recipe.strMeal;

  recipeDiv.appendChild(recipeImage);
  recipeDiv.appendChild(recipeTitle);
  recipeSection.appendChild(recipeDiv);

}

displayArea = (area, id) => {
  const areaSection = document.getElementById(id);
  const areaName = document.createElement("div");

  areaName.classList.add("area-list");
  areaName.addEventListener("click", function(){
    //delete previous recipes list
    const recipeSection = document.getElementById("area");
    recipeSection.innerHTML = "";

    fetchbyArea(area.strArea).then((recipes) => {
      recipes.forEach((recipe) => {
        displayAreaSearch(recipe, "area");
      });
    });
  });
  
  areaName.textContent = area.strArea;
  
  areaSection.appendChild(areaName);
}

function displayAreaSearch(recipe, id) {
  const recipeSection = document.getElementById(id);
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("area");

  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.strMealThumb;

  const recipeTitle = document.createElement("h3");
  recipeTitle.textContent = recipe.strMeal;

  recipeDiv.appendChild(recipeImage);
  recipeDiv.appendChild(recipeTitle);
  recipeSection.appendChild(recipeDiv);

}

// Fetch all things from API on load
window.onload = function () {
  // get random recipe
  getFood().then((recipes) => {
    recipes.forEach((recipe) => {
      displayRecipe(recipe, "recipe");
    });
  });

  // get all categories

  getAllCat().then((categories) => {
    categories.forEach((category) => {
      displayCategory(category, "category-list");
    });
  });

  // get all areas
  getAllArea().then((areas) => {
    areas.forEach((area) => {
      displayArea(area, "area-list");
    });
  });

  // get all ingredients
  getAllIngred().then((ingredients) => {
    ingredients.forEach((ingredient) => {
      displayIngredients(ingredient, "ingredient-list");
    });
  })
};


// search function
function searchbyname() {
  // delete previous recipes list
  const recipeSection = document.getElementById("recipe");
  recipeSection.innerHTML = "";

  // get search input
  const searchInput = document.getElementById("search-bar").value;

  // filter recipes
  fetchbyName(searchInput).then((recipes) => {
    recipes.forEach((recipe) => {
      displayRecipe(recipe, "recipe");
    });
  });

}

function searchbycategory() {
  // delete previous recipes list
  const recipeSection = document.getElementById("category-list");
  recipeSection.innerHTML = "";

  // get search input
  const searchInput = document.getElementById("search-bar").value;

  // filter recipes
  fetchbyCategory(searchInput).then((recipes) => {
    recipes.forEach((recipe) => {
      displayRecipe(recipe, "category-list");
    });
  });

}
function searchbyingredients() {
  // delete previous recipes list
  const recipeSection = document.getElementById("ingredient-list");
  recipeSection.innerHTML = "";

  // get search input
  const searchInput = document.getElementById("search-bar").value;

  // filter recipes
  fetchbyIngredient(searchInput).then((recipes) => {
    recipes.forEach((recipe) => {
      displayRecipe(recipe, "ingredient-list");
    });
  });

}

function searchbyarea() {
  // delete previous recipes list
  const recipeSection = document.getElementById("area-list");
  recipeSection.innerHTML = "";

  // get search input
  const searchInput = document.getElementById("search-bar").value;

  // filter recipes
  fetchbyArea(searchInput).then((recipes) => {
    recipes.forEach((recipe) => {
      displayRecipe(recipe, "area-list");
    });
  });

}
