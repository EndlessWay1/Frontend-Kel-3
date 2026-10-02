import { addUsers, setAuth, validatePass } from "./auth.js";

const login = $("#form-login");

login.on("submit", function (e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(this));

  // hrusnya fetching ad user ato engga disini

  //   find all user in const
  try {
    const user = validatePass(data.email, data.password);
    setAuth(user);
    // redirect
    window.location.href = "./index.html";
  } catch (e) {
    console.log(e.message);
  }
});

const signup = $("#form-signup");

signup.on("submit", function (e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(this));

  try {
    const user = {
      ...data,
      joined: new Date(),
      role: "user",
      id: crypto.randomUUID(),
    };
    addUsers(user);
    setAuth(user);
    // window.location.href = "./index.html";
  } catch (e) {
    console.log(e.message);
  }
});
