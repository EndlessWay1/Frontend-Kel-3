// CONST
const linkNav = [
  {
    id: 1,
    target: "./index.html",
    name: "Home",
  },
  {
    id: 2,
    target: "./recipes.html",
    name: "Recipe",
  },
  {
    id: 3,
    target: "./login.html",
    name: "Log in",
  },
];

const header = $("#header");
$(document).ready(function () {
  const curr = window.location.href;

  const nav = $('<nav class="navbar navbar-expand-md container-fluid"></nav>');

  nav.append(` <div id="head-title">
                <img src="./assets/logo.png" alt="coffee" width="38" />
                <a class="navbar-brand fw-bold" href="#hero">Kopi Nusantara</a>
                </div>`);

  const navbarSupportedContent = $(
    `<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>`,
  );
  const user = auth();

  const ul = $(`<ul class="navbar-nav"></ul>`);

  ul.append(
    linkNav.map(({ id, target, name }) => {
      const alink = $('<a class="nav-link"></a>');
      if (id === 3 && user) {
        // id of login
        alink.attr("href", "#");

        alink.on("click", function (e) {
          e.preventDefault();
          sessionStorage.clear();
          window.location.reload();
        });
        alink.text("Sign out");
      } else {
        alink.attr("href", target);
        alink.text(name);
      }
      const li = $(`<li class="nav-item">
        </li>`);
      li.append(alink);
      return li;
    }),
  );

  const dives = $("<div id='user-title'></div>");

  if (user) {
    dives.append(`<h2>${user.name}</h2>`);
    nav.append(dives);
  }

  nav.append(`<button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
    <span class="navbar-toggler-icon"></span>
    </button>`);

  navbarSupportedContent.append(ul);
  nav.append(navbarSupportedContent);
  header.append(nav);
});
