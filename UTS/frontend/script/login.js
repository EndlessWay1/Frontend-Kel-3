import { addUsers, setAuth, validatePass } from "./auth.js";

const login = $("#form-login");

login.on("submit", function (e) {
  e.preventDefault();

  //   clear past error
  $(".user-error").text("");

  const data = Object.fromEntries(new FormData(this));

  // hrusnya fetching ad user ato engga disini
  let error = false;
  if (!data.email.trim()) {
    $("#login-error-email").text("Email must be filled!");
    error = true;
  }
  if (!data.password) {
    $("#login-error-password").text("Password must be filled!");
    error = true;
  }

  if (error) {
    return;
  }

  //   find all user in const
  try {
    const user = validatePass(data.email, data.password);
    setAuth(user);
    // redirect
    window.location.href = "./index.html";
  } catch (e) {
    $("#login-error-global").text(e.message);
  }
});

const signup = $("#form-signup");

signup.on("submit", function (e) {
  e.preventDefault();
  //   clear past error
  $(".user-error").text("");

  const data = Object.fromEntries(new FormData(this));

  let error = false;
  for (const i in data) {
    if (!data[i]) {
      $(`#signup-error-${i}`).text(`Must be filled!`);
      error = true;
    }

    if (
      data[i].length <= 3 &&
      (data[i] != "password" || data[i] != "c-password")
    ) {
      $(`#signup-error-${i}`).text(`Data must be more than 3 characters!`);
      error = true;
    }
  }

  if (data.password !== data["c-password"]) {
    $(`#signup-error-c-password`).text(`Password isn't the same!`);
    error = true;
  }

  if (error) {
    return;
  }

  try {
    const user = {
      ...data,
      joined: new Date(),
      role: "user",
      id: crypto.randomUUID(),
    };
    addUsers(user);
    setAuth(user);
    window.location.href = "./index.html";
  } catch (e) {
    $("#signup-error-global").text(e.message);
  }
});
