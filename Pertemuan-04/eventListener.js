// CONSTANTS
const deltaUpdateCanvasToWindow = 20;
const deltaUpdateMouseMoved = 10;

// Element Constants
const head = document.getElementById("header");
const mediaQuery = window.matchMedia("(width >= 992px)");
const dropdown = document.getElementById("dropdown");

dropdown.addEventListener("click", () => {
  const dropContentsStyle = getComputedStyle(
    document.getElementById("dropContent"),
  ).display;
  if (dropContentsStyle !== "none") {
    document.getElementById("dropContent").style.display = "none";
  } else {
    document.getElementById("dropContent").style.display = "inline";
  }
});

head.addEventListener("animationend", () => {
  if (head.classList.contains("header-moved-top")) {
    head.style.backgroundColor = "#21181100";
  } else {
    head.style.backgroundColor = "#21181120";
  }
});

// for letting the nav know if its on the top;
let active = null;

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  if (scrollY === 0) {
    head.classList.add("header-moved-top");
    head.classList.remove("header-moved-bottom");
    active = null;
  } else {
    head.classList.add("header-moved-bottom");
    head.classList.remove("header-moved-top");
  }
});

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    document.getElementById("dropContent").style.display = "none";
  }
});

// for the follow mouse effects
const mouseCnvs = new mouseCanvas(20);

const redraw = () => {
  mouseCnvs.clear();
  mouseCnvs.createAllBox();
  requestAnimationFrame(redraw);
};

// When window is resized, the canvas size gets updated
let prevW = window.innerWidth;
let prevH = window.innerHeight;

window.addEventListener("resize", () => {
  if (
    Math.abs(prevH - window.innerHeight) >= deltaUpdateCanvasToWindow ||
    Math.abs(prevW - window.innerWidth) >= deltaUpdateCanvasToWindow
  ) {
    prevW = window.innerWidth;
    prevH = window.innerHeight;
    mouseCnvs.resizeCanvas();
  }
});

// follow the mouse
let prevMouseX = -1;
let prevMouseY = -1;
window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  if (
    Math.abs(prevMouseX - x) >= deltaUpdateMouseMoved ||
    Math.abs(prevMouseY - y) >= deltaUpdateMouseMoved
  ) {
    mouseCnvs.recordMouse(x, y, prevMouseX, prevMouseY);
    prevMouseX = x;
    prevMouseY = y;
  }
});

setInterval(() => {
  mouseCnvs.updateArray();
}, 100);

redraw();
