// ---------- storage layer ----------
// Only these two functions touch localStorage.
// When the database is ready, replace their bodies with fetch() calls.
function loadRecipes() {
  return JSON.parse(localStorage.getItem("recipesData") || "[]");
}
function saveRecipe(recipe) {
  const all = loadRecipes();
  all.push(recipe);
  localStorage.setItem("recipesData", JSON.stringify(all));
}

$(function () {
  const user = auth();
  if (!user) {
    window.location.href = "./login.html";
    return;
  }
  $("#root").prop("hidden", false);
  $("#postingAs").text(user.name);

  const LABELS = {
    category: { sunda: "Khas Sunda", solo: "Khas Solo" },
    method: { "rice-cooker": "Rice Cooker", tradisional: "Tradisional" },
  };

  const $title = $("#title");
  const $category = $("#category");
  const $method = $("#method");
  const $time = $("#time");
  const $servings = $("#servings");
  const $image = $("#image");
  const $source = $("#source");
  const $desc = $("#description");

  // ---------- tags (saved as generalIngredients) ----------
  let tags = [];
  const $tagBox = $("#tagBox");
  const $tagInput = $("#tagInput");

  function renderTags() {
    $tagBox.find(".cr-chip").remove();
    tags.forEach((t, i) => {
      const $chip = $('<span class="cr-chip"></span>').text(t);
      $chip.append($('<button type="button" aria-label="Remove tag">&times;</button>').attr("data-i", i));
      $chip.insertBefore($tagInput);
    });
    $("#pvTags").empty().append(tags.map((t) => $('<span class="cr-chip"></span>').text(t)));
  }

  function addTag(raw) {
    const t = raw.trim().replace(/,$/, "").trim();
    if (!t || tags.some((x) => x.toLowerCase() === t.toLowerCase())) return;
    tags.push(t);
    renderTags();
  }

  $tagInput.on("keydown", function (e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag($tagInput.val());
      $tagInput.val("");
    } else if (e.key === "Backspace" && !$tagInput.val() && tags.length) {
      tags.pop();
      renderTags();
    }
  });
  $tagInput.on("blur", function () {
    addTag($tagInput.val());
    $tagInput.val("");
  });
  $tagBox.on("click", "button", function () {
    tags.splice(Number($(this).attr("data-i")), 1);
    renderTags();
  });

  // ---------- live preview ----------
  function preview() {
    $("#pvTitle").text($title.val().trim() || "Your recipe title");
    $("#pvCategory").text(LABELS.category[$category.val()]);
    $("#pvMethod").text(LABELS.method[$method.val()]);
    $("#pvTime").text($time.val().trim() || "Cook time");
    $("#pvServings").text($servings.val().trim() || "Servings");
    $("#pvDesc").text($desc.val().trim() || "Your description will appear here.");
    $("#pvSource").text("Sumber: " + ($source.val().trim() || user.name));
    const url = $image.val().trim();
    $("#pvImage").prop("hidden", !url).attr("src", url);
    $("#pvNoImg").prop("hidden", !!url);
  }
  $("#pvImage").on("error", function () {
    $(this).prop("hidden", true);
    $("#pvNoImg").prop("hidden", false);
  });
  $title.add($category).add($method).add($time).add($servings).add($image).add($source).add($desc).on("input change", preview);
  preview();
  renderTags();

  // ---------- instruction steps ----------
  function addStep(value = "") {
    const $row = $('<div class="cr-row"></div>')
      .append($('<textarea class="cr-input cr-item" rows="2" placeholder="e.g. Cuci beras hingga bersih"></textarea>').val(value))
      .append('<button type="button" class="cr-x" aria-label="Remove step">&times;</button>');
    $("#stepList").append($row);
  }
  $("#addStep").on("click", () => addStep());
  $("#stepList").on("click", ".cr-x", function () {
    $(this).closest(".cr-row").remove();
  });
  addStep();
  addStep();

  // ---------- ingredient groups: { group, items[] } ----------
  function addGroupItem($group, value = "") {
    const $row = $('<div class="cr-row"></div>')
      .append($('<input class="cr-input cr-item" type="text" placeholder="e.g. 5 siung bawang merah" />').val(value))
      .append('<button type="button" class="cr-x" aria-label="Remove item">&times;</button>');
    $group.find(".cr-group-items").append($row);
  }
  function addGroup(groupName = "") {
    const $group = $(`
      <div class="cr-group">
        <div class="cr-group-head">
          <input class="cr-input cr-group-name" type="text" placeholder="Group name e.g. Bumbu Halus" />
          <button type="button" class="cr-x cr-remove-group" aria-label="Remove group">&times;</button>
        </div>
        <div class="cr-group-items"></div>
        <button type="button" class="cr-pill cr-pill-add cr-add-item">Add item</button>
      </div>
    `);
    $group.find(".cr-group-name").val(groupName);
    $("#groupList").append($group);
    addGroupItem($group);
  }
  $("#addGroup").on("click", () => addGroup());
  $("#groupList").on("click", ".cr-add-item", function () {
    addGroupItem($(this).closest(".cr-group"));
  });
  $("#groupList").on("click", ".cr-remove-group", function () {
    $(this).closest(".cr-group").remove();
  });
  $("#groupList").on("click", ".cr-group-items .cr-x", function () {
    $(this).closest(".cr-row").remove();
  });
  addGroup("Bumbu Halus");
  addGroup("Bahan Utama");

  // ---------- collect + validate + save ----------
  const textOf = (els) => els.map((_, el) => $(el).val().trim()).get().filter(Boolean);

  function collectGroups() {
    const groups = [];
    $("#groupList .cr-group").each(function () {
      const group = $(this).find(".cr-group-name").val().trim();
      const items = textOf($(this).find(".cr-group-items .cr-item"));
      if (group && items.length) groups.push({ group, items });
    });
    return groups;
  }

  $("#recipeForm").on("submit", function (e) {
    e.preventDefault();
    addTag($tagInput.val());
    $tagInput.val("");
    $(".cr-error").text("");

    const instructions = textOf($("#stepList .cr-item"));
    const ingredients = collectGroups();

    let ok = true;
    const bad = (id, msg) => {
      $("#" + id).text(msg);
      ok = false;
    };
    if (!$title.val().trim()) bad("errTitle", "Add a title for your recipe.");
    if (!$time.val().trim()) bad("errTime", "Enter a cook time, e.g. 45 menit.");
    if (!$servings.val().trim()) bad("errServings", "Enter how many servings this makes.");
    if ($desc.val().trim().length < 10) bad("errDesc", "Write a description of at least 10 characters.");
    if (!tags.length) bad("errTags", "Add at least one tag.");
    if (!ingredients.length) bad("errGroups", "Add at least one ingredient group with a name and items.");
    if (!instructions.length) bad("errSteps", "Add at least one step.");

    if (!ok) {
      $(".cr-error:not(:empty)").first()[0].scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const category = $category.val();
    const method = $method.val();

    // same shape as the objects in recipes.js, plus `author`
    saveRecipe({
      id: Date.now(),
      title: $title.val().trim(),
      category,
      method,
      categoryLabel: LABELS.category[category],
      methodLabel: LABELS.method[method],
      image: $image.val().trim(),
      time: $time.val().trim(),
      servings: $servings.val().trim(),
      source: $source.val().trim() || user.name,
      author: user.username,
      description: $desc.val().trim(),
      generalIngredients: tags,
      ingredients,
      instructions,
    });

    window.location.href = "./recipes.html";
  });
});