import { loadRecipes } from "./recipe-board.js";

let currentFilter = "all";
let searchQuery = "";

const recipesData = loadRecipes();

function renderRecipes() {
  const container = $("#recipes-grid");
  if (container.length === 0) return;

  container.empty();

  let filteredRecipes = [];
  let query = searchQuery.toLowerCase().trim();

  for (let i = 0; i < recipesData.length; i++) {
    let item = recipesData[i];
    let matchCat = false;

    if (currentFilter === "all") {
      matchCat = true;
    } else if (
      item.category === currentFilter ||
      item.method === currentFilter
    ) {
      matchCat = true;
    }

    let matchText = false;
    if (query === "") {
      matchText = true;
    } else {
      let judul = item.title.toLowerCase();
      let deskripsi = item.description.toLowerCase();
      if (judul.indexOf(query) !== -1 || deskripsi.indexOf(query) !== -1) {
        matchText = true;
      }
    }

    if (matchCat && matchText) {
      filteredRecipes.push(item);
    }
  }

  if (filteredRecipes.length > 0) {
    $("#recipes-count").text(
      "Menampilkan " + filteredRecipes.length + " resep",
    );
  } else {
    $("#recipes-count").text("");
  }

  if (filteredRecipes.length === 0) {
    let emptyHtml = `
      <div class="col-12">
        <div class="recipes-empty">
          <h4>Tidak ada resep yang ditemukan</h4>
          <p>Coba gunakan kata kunci lain atau ubah filter di atas.</p>
        </div>
      </div>
    `;
    container.append(emptyHtml);
    return;
  }

  for (let i = 0; i < filteredRecipes.length; i++) {
    let recipe = filteredRecipes[i];

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

    container.append(cardHtml);
  }
}

function renderRecipeDetail() {
  const detailContainer = $("#recipe-detail-container");
  if (detailContainer.length === 0) return;

  let params = new URLSearchParams(window.location.search);
  let recipeId = params.get("id");
  if (!recipeId) {
    recipeId = 1;
  }
  console.log(typeof recipeId);

  const recipe = recipesData.find((e) => {
    return e.id.toString() === recipeId;
  });
  console.log(recipesData);

  if (!recipe) {
    detailContainer.html(`
      <div class="recipes-empty my-5">
        <h4>Resep tidak ditemukan</h4>
        <p class="mb-3">Resep yang Anda tuju tidak tersedia.</p>
        <a href="recipes.html" class="recipe-link-btn">Kembali ke Katalog Resep</a>
      </div>
    `);
    return;
  }

  document.title = "Nasi Liwet: " + recipe.title;

  let ingredientsHtml = "";
  if (recipe.ingredients && recipe.ingredients.length > 0) {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      let groupObj = recipe.ingredients[i];
      ingredientsHtml +=
        '<div class="ingredient-group-title">' + groupObj.group + "</div>";
      ingredientsHtml += '<ul class="ingredient-list">';
      for (let j = 0; j < groupObj.items.length; j++) {
        ingredientsHtml +=
          '<li class="ingredient-item">' + groupObj.items[j] + "</li>";
      }
      ingredientsHtml += "</ul>";
    }
  }

  let instructionsHtml = "";
  if (recipe.instructions && recipe.instructions.length > 0) {
    for (let i = 0; i < recipe.instructions.length; i++) {
      let stepNum = i + 1;
      instructionsHtml += `
        <div class="method-step-card">
          <span class="method-step-num">Langkah ${stepNum}</span>
          <p class="method-step-text">${recipe.instructions[i]}</p>
        </div>
      `;
    }
  }

  let detailHtml = `
    <section class="detail-hero-card">
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-7">
          <div class="d-flex gap-2 mb-2">
            <span class="badge" style="background-color: var(--kombu-dark); color: #fff;">${recipe.categoryLabel}</span>
            <span class="badge" style="background-color: var(--spiced-light); color: #fff;">${recipe.methodLabel}</span>
          </div>

          <h1 class="detail-title">${recipe.title}</h1>

          <div class="detail-pendukung-bar">
            <span>⏱ Waktu: ${recipe.time}</span>
            <span>Porsi: ${recipe.servings}</span>
            <span>Sumber: ${recipe.source}</span>
          </div>

          <p class="detail-desc">${recipe.description}</p>

          <div class="mt-4">
            <a href="recipes.html" class="recipe-link-btn">&larr; Kembali ke Katalog Resep</a>
          </div>
        </div>

        <div class="col-12 col-lg-5">
          <div class="detail-img-wrap">
            <img src="${recipe.image}" alt="${recipe.title}" class="detail-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="row g-4 mt-1">
      <div class="col-12 col-lg-5">
        <div class="detail-section-card">
          <div class="detail-section-title">
            <span>Bahan-Bahan</span>
            <span class="detail-servings-badge">${recipe.servings}</span>
          </div>
          <div class="ingredients-list">
            ${ingredientsHtml}
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-7">
        <div class="detail-section-card">
          <div class="detail-section-title">
            <span>Langkah-Langkah Memasak</span>
          </div>
          <div class="instructions-list">
            ${instructionsHtml}
          </div>
        </div>
      </div>
    </section>

    <div class="detail-back-bar">
      <a href="recipes.html" class="recipe-link-btn">&larr; Kembali ke Semua Resep</a>
    </div>
  `;

  detailContainer.html(detailHtml);
}

$(document).ready(function () {
  if ($("#recipes-grid").length) {
    renderRecipes();

    $(".filter-btn").click(function () {
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");

      currentFilter = $(this).attr("data-filter");
      renderRecipes();
    });

    $("#recipe-search").on("input", function () {
      searchQuery = $(this).val();
      renderRecipes();
    });
  }

  if ($("#recipe-detail-container").length) {
    renderRecipeDetail();
  }
});
