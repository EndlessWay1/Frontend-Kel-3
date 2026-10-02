// check auth
import { formatDistanceToNow } from "https://cdn.jsdelivr.net/npm/date-fns@4.4.0/+esm";
import { auth, editUser } from "./auth.js";
import { loadRecipes } from "./recipe-board.js";

function Profile() {
  const user = auth();

  const outerDiv = $("<div id='user-info'></div>");

  outerDiv.append(`<div
    id="profile"
    class="card"
  >
    <div class="card-body" >
        <h4 class="card-title text-center fs-2">User Profile</h4>
        <p class='text-center profile-date'><span>Joined since ${formatDistanceToNow(new Date(user.joined), { addSuffix: true })}</span></p>
       
        <div class='profile-content'>
            <h5>Email</h5>

            <div class="container-fluid">
                ${user.email}
            </div>
        </div>
<form id="form-user-edit">

    <div class="profile-content">
        <h5>Username</h5>
        <input
            class="container-fluid"
            type="text"
            name="username"
            value="${user.username}"
            id="user-username-form"
        />
    </div>

    <div class="profile-content">
        <h5>Name</h5>
        <input
            class="container-fluid"
            type="text"
            name="name"
            value="${user.name}"
            id="user-name-form"
        />
    </div>

    <div class="form-buttons">
        <button
            type="button"
            class="form-cancel-btn"
            hidden
        >
            Cancel
        </button>

        <button
            type="submit"
            class="form-change-btn"
            hidden
        >
            Change
        </button>
    </div>

</form>
    </div>
  </div>`);
  return outerDiv;
}

function RecipeCreated() {
  const user = auth();
  const recipeHeader = $(`
      <div id="user-recipe-header">
        <h1>Recipes Made</h1>
        <p class="profile-date">Some of the Recipes, made by you</p>
      </div>`);

  const recipes = loadRecipes().filter((e) => e.user_id === user.id);
  const sect = $("<section style='margin: 5dvh 10dvw'></section");
  const recipesContent = $(`<div class="row g-4" id="recipes-grid"></div>`);
  sect.append(recipesContent);
  if (recipes.length === 0) {
    const NoContent = $(
      `<h3 id="user-text-recipe"><a href="./create-recipe.html">No recipe found, make a recipe </a></h3>`,
    );
    recipesContent.append(NoContent);
    return [recipeHeader, recipesContent];
  }

  console.log(recipes.length);
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];

    // susun tag bahan utama pakai string biasa
    let ingredientTags = "";
    for (let j = 0; j < recipe.generalIngredients.length; j++) {
      ingredientTags +=
        '<span class="ingredient-tag">' +
        recipe.generalIngredients[j] +
        "</span>";
    }

    let cardHtml = `
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <article class="recipe-card w-100">
            <div class="recipe-img-wrap">
              <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img" />
              <span class="recipe-badge">${recipe.categoryLabel}</span>
              <span class="recipe-method-badge">${recipe.methodLabel}</span>
            </div>
  
            <div class="recipe-card-body">
              <div class="recipe-pendukung">
                <span>⏱ ${recipe.time}</span>
                <span>👥 ${recipe.servings}</span>
              </div>
  
              <h3 class="recipe-title">${recipe.title}</h3>
              <p class="recipe-desc">${recipe.description}</p>
  
              <div class="recipe-ingredients">
                <div class="recipe-ingredients-label">Bahan Utama</div>
                <div class="d-flex flex-wrap">
                  ${ingredientTags}
                </div>
              </div>
  
              <div class="recipe-card-footer">
                <span class="recipe-source">Sumber: ${recipe.source}</span>
                <a href="recipe-detail.html?id=${recipe.id}" class="recipe-link-btn">Lihat Resep</a>
              </div>
            </div>
          </article>
        </div>
      `;

    recipesContent.append(cardHtml);
  }
  return [recipeHeader, sect];
}

$(document).on("focus", "#user-name-form, #user-username-form", function () {
  $(".form-change-btn").prop("hidden", false);
  $(".form-cancel-btn").prop("hidden", false);
});

$(document).ready(function () {
  const user = auth();
  if (!user) {
    window.location.href = "./login.html";
    return;
  }

  const root = $("#root");
  root.append(Profile());
  root.append(RecipeCreated());

  $("#form-user-edit").on("submit", function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this));
    console.log(data);
    let error = false;
    if (data.name.trim() === "") {
      $("#user-name-error").text("Must be filled!");
      error = true;
    } else if (data.name.length <= 3) {
      $("#user-name-error").text("Must be more than 3 characters!");
      error = true;
    }
    if (data.username.trim() === "") {
      $("#user-username-error").text("Must be filled!");
      error = true;
    } else if (data.username.length <= 5) {
      $("#user-username-error").text("Must be more than 5 characters!");
      error = true;
    }
    console.log(error);
    if (error) {
      return;
    }
    user.name = data.name.trim();
    user.username = data.username.trim();
    try {
      editUser(user);
    } catch (e) {
      $("#user-global-error").text(e.message);
    }
    window.location.reload();
  });

  $(".form-cancel-btn").click(function (e) {
    root.empty();
    root.append(Profile());
    window.location.reload();
  });
  // fetch
});
