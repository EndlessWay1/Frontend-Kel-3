function auth() {
  const res = JSON.parse(sessionStorage.getItem("user"));
  return res;
}
function isAdmin() {
  const user = auth();
  return user && user.role === "admin";
}

function seedUser() {
  try {
    addUsers({
      id: 1,
      username: "john1234",
      name: "John Doe",
      email: "john.untar@gmail.com",
      role: "admin",
      password: "12345678",
      joined: new Date(2001, 0, 1).toISOString(),
    });
  } catch {}
}

function getUsers() {
  if (isAdmin()) {
    return loadUsers();
  }
  throw new Error("Unathorized");
}

function logout() {
  sessionStorage.removeItem("user");
}

function removeUser(id) {
  const currentUser = auth();

  if (!currentUser) {
    throw new Error("Unauthorized");
  }

  if (isAdmin() || currentUser.email === user.email) {
    const users = loadUsers();

    const userIdx = users.findIndex((obj) => id === obj.id);

    if (userIdx === -1) {
      throw new Error("User not found");
    }
    users.splice(userIdx, 1);
    sessionStorage.setItem("users", JSON.stringify(users));
    return;
  }
  throw new Error("Unathorized");
}

function findIndex(email) {
  return loadUsers().findIndex((obj) => email === obj.email);
}

function editUser(user) {
  const currentUser = auth();

  if (!currentUser) {
    throw new Error("Unauthorized");
  }

  if (isAdmin() || currentUser.email === user.email) {
    const users = loadUsers();

    const userIdx = users.findIndex((obj) => user.email === obj.email);

    if (userIdx === -1) {
      throw new Error("User not found");
    }

    users[userIdx] = user;

    sessionStorage.setItem("users", JSON.stringify(users));
  } else {
    throw new Error("Unauthorized");
  }
}

function setAuth(user) {
  // sessionStorage.clear();
  sessionStorage.setItem("user", JSON.stringify(user));
}

function loadUsers() {
  console.log(sessionStorage.getItem("users"));
  return JSON.parse(
    sessionStorage.getItem("users") ??
      `[${JSON.stringify({
        id: 1,
        username: "john1234",
        name: "John Doe",
        email: "john.untar@gmail.com",
        role: "admin",
        password: "12345678",
        joined: new Date(2001, 0, 1).toISOString(),
      })}]`,
  );
}

function addUsers(user) {
  const users = loadUsers();

  if (users.find(({ email }) => user.email === email)) {
    throw new Error("Email is already used");
  }
  sessionStorage.setItem("users", JSON.stringify([...users, user]));
}

function validatePass(email, pass) {
  const users = loadUsers();

  const user = users.find((obj) => email === obj.email);
  // shouldnt do this, please no
  if (!user || pass !== user.password) {
    throw new Error("Password or Email is incorrect!");
  } else {
    return user;
  }
}

export {
  addUsers,
  validatePass,
  auth,
  setAuth,
  getUsers,
  logout,
  editUser,
  removeUser,
  seedUser,
  isAdmin,
};
