// check auth

// const user = auth();

// if (!user) {
//   window.location.href = "./login.html";
// }

// if (user && user.role !== "admin") {
//   window.location.href = "./index.html";
// }

console.log("Admin page accessed without login");

// USER MANAGEMENT

let users = [];

function loadUsers() {

  let savedUsers = localStorage.getItem("users");

  if (savedUsers) {

    users = JSON.parse(savedUsers);

  } else {

    users = [
      {
        username: "john1234",
        name: "John Doe",
        email: "john.untar@gmail.com",
        role: "admin"
      }
    ];

    localStorage.setItem("users", JSON.stringify(users));
  }
}


function renderUsers() {

  const table = $("#user-table-body");

  table.empty();

  for (let i = 0; i < users.length; i++) {

    let item = users[i];

    let roleBadge = "";

    if (item.role === "admin") {

      roleBadge = `
        <span class="admin-role admin-role-admin">
          Admin
        </span>
      `;

    } else {

      roleBadge = `
        <span class="admin-role admin-role-user">
          User
        </span>
      `;
    }


    let row = `
      <tr>

        <td>${i + 1}</td>

        <td>
          ${item.username}
        </td>

        <td>
          ${item.name}
        </td>

        <td>
          ${item.email}
        </td>

        <td>
          ${roleBadge}
        </td>

        <td>

          <button
            class="admin-edit-btn edit-user-btn"
            data-index="${i}"
          >
            Edit
          </button>

          <button
            class="admin-delete-btn delete-user-btn"
            data-index="${i}"
          >
            Delete
          </button>

        </td>

      </tr>
    `;

    table.append(row);
  }
}


function saveUsers() {

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );
}


// ADD USER

function openAddUser() {

  $("#user-form")[0].reset();

  $("#user-index").val("");

  $("#user-modal-title").text(
    "Tambah User"
  );

  const modal = new bootstrap.Modal(
    document.getElementById("userModal")
  );

  modal.show();
}


// EDIT USER

function openEditUser(index) {

  let item = users[index];

  $("#user-index").val(index);

  $("#user-username").val(item.username);

  $("#user-name").val(item.name);

  $("#user-email").val(item.email);

  $("#user-role").val(item.role);

  $("#user-modal-title").text(
    "Edit User"
  );

  const modal = new bootstrap.Modal(
    document.getElementById("userModal")
  );

  modal.show();
}


// DELETE USER

function deleteUser(index) {

  let item = users[index];

  let confirmDelete = confirm(
    "Are you sure to delete user " +
    item.username +
    "?"
  );

  if (!confirmDelete) {
    return;
  }

  users.splice(index, 1);

  saveUsers();

  renderUsers();
}


// SAVE USER

function saveUser() {

  let index = $("#user-index").val();

  let username = $("#user-username").val();

  let name = $("#user-name").val();

  let email = $("#user-email").val();

  let role = $("#user-role").val();


  let newUser = {
    username: username,
    name: name,
    email: email,
    role: role
  };


  if (index === "") {

    users.push(newUser);

  } else {

    users[index] = newUser;

  }


  saveUsers();

  renderUsers();


  let modalElement =
    document.getElementById("userModal");

  let modal =
    bootstrap.Modal.getInstance(modalElement);

  modal.hide();
}


// RECIPE MANAGEMENT

function renderAdminRecipes() {

  const table = $("#recipe-table-body");

  table.empty();


  for (let i = 0; i < recipesData.length; i++) {

    let recipe = recipesData[i];

    let row = `
      <tr>

        <td>
          ${i + 1}
        </td>

        <td>
          <strong>${recipe.title}</strong>
        </td>

        <td>
          ${recipe.categoryLabel}
        </td>

        <td>
          ${recipe.methodLabel}
        </td>

        <td>
          ${recipe.source}
        </td>

        <td>

          <button
            class="admin-edit-btn edit-recipe-btn"
            data-index="${i}"
          >
            Edit
          </button>

          <button
            class="admin-delete-btn delete-recipe-btn"
            data-index="${i}"
          >
            Delete
          </button>

        </td>

      </tr>
    `;

    table.append(row);
  }
}


// EDIT RECIPE

function openEditRecipe(index) {

  let recipe = recipesData[index];

  $("#recipe-index").val(index);

  $("#recipe-title").val(recipe.title);

  $("#recipe-category").val(recipe.category);

  $("#recipe-method").val(recipe.method);

  $("#recipe-time").val(recipe.time);

  $("#recipe-servings").val(recipe.servings);

  $("#recipe-source").val(recipe.source);

  $("#recipe-description").val(
    recipe.description
  );


  const modal = new bootstrap.Modal(
    document.getElementById("recipeModal")
  );

  modal.show();
}


// SAVE RECIPE

function saveRecipe() {

  let index = $("#recipe-index").val();

  let recipe = recipesData[index];


  recipe.title =
    $("#recipe-title").val();

  recipe.category =
    $("#recipe-category").val();

  recipe.method =
    $("#recipe-method").val();

  recipe.time =
    $("#recipe-time").val();

  recipe.servings =
    $("#recipe-servings").val();

  recipe.source =
    $("#recipe-source").val();

  recipe.description =
    $("#recipe-description").val();


  // update label

  if (recipe.category === "sunda") {

    recipe.categoryLabel = "Khas Sunda";

  } else {

    recipe.categoryLabel = "Khas Solo";

  }


  if (recipe.method === "rice-cooker") {

    recipe.methodLabel = "Rice Cooker";

  } else {

    recipe.methodLabel = "Tradisional";

  }


  renderAdminRecipes();


  let modalElement =
    document.getElementById("recipeModal");

  let modal =
    bootstrap.Modal.getInstance(modalElement);

  modal.hide();
}


// DELETE RECIPE

function deleteRecipe(index) {

  let recipe = recipesData[index];

  let confirmDelete = confirm(
    "Are you sure to delete recipe " +
    recipe.title +
    "?"
  );

  if (!confirmDelete) {
    return;
  }


  recipesData.splice(index, 1);

  renderAdminRecipes();
}


// BUTTON EVENTS

$(document).ready(function () {

  loadUsers();

  renderUsers();

  renderAdminRecipes();


  // ADD USER

  $("#add-user-btn").click(function () {

    openAddUser();

  });


  // SAVE USER

  $("#save-user-btn").click(function () {

    saveUser();

  });


  // EDIT USER

  $(document).on(
    "click",
    ".edit-user-btn",
    function () {

      let index =
        $(this).attr("data-index");

      openEditUser(index);

    }
  );


  // DELETE USER

  $(document).on(
    "click",
    ".delete-user-btn",
    function () {

      let index =
        $(this).attr("data-index");

      deleteUser(index);

    }
  );


  // EDIT RECIPE

  $(document).on(
    "click",
    ".edit-recipe-btn",
    function () {

      let index =
        $(this).attr("data-index");

      openEditRecipe(index);

    }
  );


  // DELETE RECIPE

  $(document).on(
    "click",
    ".delete-recipe-btn",
    function () {

      let index =
        $(this).attr("data-index");

      deleteRecipe(index);

    }
  );


  // SAVE RECIPE

  $("#save-recipe-btn").click(function () {

    saveRecipe();

  });

});