import { auth, isAdmin } from "./auth.js";
import { recipesData } from "./constants/index.js";

function seedRecipes() {
  localStorage.setItem("recipesData", JSON.stringify(recipesData));
}

function loadRecipes() {
  return JSON.parse(localStorage.getItem("recipesData") ?? "[]");
}

function removeRecipe(id) {
  const recipeData = loadRecipes();
  const user = auth();
  if (!user) {
    throw new Error("Unathorized");
  }
  if (isAdmin() || recipeData.find((e) => e.user_id === user.id)) {
    const index = recipeData.findIndex((r) => r.id === id);
    // index not found
    if (index === -1) {
      throw new Error("Recipe Not Found");
    }
    recipeData.splice(index, 1);
    localStorage.setItem("recipesData", JSON.stringify(recipeData));
    return;
  }
  throw new Error("Unathorized");
}

function saveRecipe(recipe) {
  const all = loadRecipes();

  const user = auth();
  if (!user) {
    throw new Error("Unathorized");
  }

  if (!all.find((e) => recipe.id === e.id)) {
    all.push({ ...recipe, source: user.name, user_id: user.id });
    localStorage.setItem("recipesData", JSON.stringify(all));
    return;
  }
  throw new Error("Recipe id is already in db");
}

function editRecipe(recipe) {
  const all = loadRecipes();
  const user = auth();
  if (isAdmin() || all.find((e) => e.user_id === user.id)) {
    const findIndex = all.findIndex((e) => e.id === recipe.id);

    // index not found
    if (findIndex === -1) {
      throw new Error("Recipe Not Found");
    }
    all[findIndex] = recipe;
    localStorage.setItem("recipesData", JSON.stringify(all));
    return;
  }
  throw new Error("Unathorized");
}

function getRecipe(index) {
  return loadRecipes()[index];
}

export {
  saveRecipe,
  loadRecipes,
  seedRecipes,
  removeRecipe,
  editRecipe,
  getRecipe,
};
