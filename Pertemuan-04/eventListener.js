// CONSTANTS
const deltaUpdateCanvasToWindow = 20;
const deltaUpdateMouseMoved = 10;

// Element Constants
const head = document.getElementById("header");
const canv = document.getElementById("canvasId");

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
    prevMouseX = x;
    prevMouseY = y;
  }
});
