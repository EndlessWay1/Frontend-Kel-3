// CONSTANTS

const deltaUpdateCanvasToWindow = 20;

const deltaUpdateMouseMoved = 10;

// Element Constants

const mediaQuery = window.matchMedia("(width >= 992px)");
const header = $("#header");
const windowJQ = $(window);
const links = $('nav a[href^="#"], #dropContent a[href^="#"]');

// for accordion toggle
$(".accordion").click(function () {
  $(this).next().slideToggle();
});

// for dropdown
$("#dropdown").click(function () {
  $(this).next().slideToggle();
});

// for header section
header.on("animationend", function () {
  const head = $(this);

  if (head.hasClass("header-moved-top")) {
    head.css("background-color", "#21181100");
  } else {
    head.css("background-color", "#21181120");
  }
});

// for letting the nav know if its on the top
let active = null;

windowJQ.on("scroll", function () {
  let scrollY = this.scrollY;

  if (scrollY === 0) {
    header.addClass("header-moved-top");
    header.removeClass("header-moved-bottom");

    active = null;
  } else {
    header.addClass("header-moved-bottom");
    header.removeClass("header-moved-top");
  }
});

// when resized, closed the dropdown

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    $("#dropContent").hide();
  }
});

// calc the offset

const naturalTop = (e) => {
  let top = $(e).parent().offset().top;

  for (let s = e.previousElementSibling; s; s = s.previousElementSibling) {
    top += $(s).outerHeight();
  }

  return top;
};

// for going back to nav

links.on("click", function (e) {
  e.preventDefault();

  const link = this;
  const target = document.querySelector($(link).attr("href"));

  const goingBack = active === link;

  // go back to the prev sect

  window.scrollTo({
    top: goingBack ? 0 : naturalTop(target),
    behavior: "smooth",
  });

  active = goingBack ? null : link;
});

// for the follow mouse effects

const mouseCnvs = new mouseCanvas(20);

const redraw = () => {
  mouseCnvs.clear();
  mouseCnvs.createAllBox();

  requestAnimationFrame(redraw);
};


let prevW = window.innerWidth;

let prevH = window.innerHeight;

// When window is resized, the canvas size gets updated
windowJQ.on("resize", function () {
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

windowJQ.on("mousemove", function (e) {
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
