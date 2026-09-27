function auth() {
  if (sessionStorage.getItem("username")) {
    // fetch here
    // const data = fetch()

    // seeding
    sessionStorage.setItem("username", "john1234");
    sessionStorage.setItem("name", "John Doe");
    sessionStorage.setItem("email", "john.untar@gmail.com");
    sessionStorage.setItem("joined", new Date(2024, 0, 1).toISOString());
    return {
      username: sessionStorage.getItem("username"),
      name: sessionStorage.getItem("name"),
      email: sessionStorage.getItem("email"),
      joined: new Date(sessionStorage.getItem("joined")),
    };
  } else {
    return undefined;
  }
}

function setAuth() {
  sessionStorage.clear();
  // seeding, should be fetching from backend or db
  sessionStorage.setItem("username", "john1234");
  sessionStorage.setItem("name", "John Doe");
  sessionStorage.setItem("email", "john.untar@gmail.com");
  sessionStorage.setItem("joined", new Date(2024, 0, 1).toISOString());
}
