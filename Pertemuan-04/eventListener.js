const head = document.getElementById("header");

head.addEventListener("animationend", () => {
  if (head.classList.contains("header-moved-top")) {
    head.style.backgroundColor = "#21181100";
  } else {
    head.style.backgroundColor = "#21181120";
  }
});

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  if (scrollY === 0) {
    head.classList.add("header-moved-top");
    head.classList.remove("header-moved-bottom");
  } else {
    head.classList.add("header-moved-bottom");
    head.classList.remove("header-moved-top");
  }
});
