async function getFood() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}

async function getAllCat() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}

async function getAllArea() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}

async function getAllIngred() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}


// Function to fetch recipe data from the API
async function fetchbyName(search) {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+search;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}

async function fetchbyCategory(search) {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + search;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}

async function fetchbyArea(search) {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + search;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}

async function fetchbyIngredients(search) {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + search;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}
