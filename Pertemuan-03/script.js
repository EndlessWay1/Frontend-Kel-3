// CONSTANT
const deltaUpdateCanvasToWindow = 20;

const draw = () => {
  // adding grid
  const c = document.getElementById("canvasObj");
  const ctx = c.getContext("2d");
  const width = c.scrollWidth;
  const height = c.scrollHeight;
  console.log(width, height);
};

// adding EventListener to window changes in canvas
let prevW = window.innerWidth;
let prevH = window.innerHeight;
window.addEventListener("resize", () => {
  if (
    Math.abs(prevH - window.innerHeight) >= deltaUpdateCanvasToWindow ||
    Math.abs(prevW - window.innerWidth) >= deltaUpdateCanvasToWindow
  ) {
    prevW = window.innerWidth;
    prevH = window.innerHeight;
    draw();
  }
});

draw();
