function displayStats(v0, angle, g) {
  const theta = (angle * Math.PI) / 180;
  const vx0 = v0 * Math.cos(theta);
  const vy0 = v0 * Math.sin(theta);

  const timeOfFlight = (2 * vy0) / g;
  const maxHeight = vy0 ** 2 / (2 * g);
  const maxDistance = (v0 ** 2 * Math.sin(2 * theta)) / g;

  return { vx0, vy0, timeOfFlight, maxHeight, maxDistance };
}

function positionAt(t, vx0, vy0, g) {
  const x = vx0 * t;
  const y = vy0 * t - 0.5 * g * t ** 2;
  return { x, y };
}

function velocityAt(t, vx0, vy0, g) {
  const vx = vx0;
  const vy = vy0 - g * t;
  return { vx, vy };
}

function runSimulation(v0, angle, g, callbacks, timeScale = 1) {
  const { vx0, vy0, timeOfFlight, maxHeight, maxDistance } = displayStats(
    v0,
    angle,
    g,
  );

  let startTimestamp = null;
  let maxHeightReached = 0;

  function frame(timestampMs) {
    if (startTimestamp === null) startTimestamp = timestampMs;
    const elapsedSeconds = ((timestampMs - startTimestamp) / 1000) * timeScale;

    const t = Math.min(elapsedSeconds, timeOfFlight);

    const { x, y } = positionAt(t, vx0, vy0, g);
    const { vx, vy } = velocityAt(t, vx0, vy0, g);
    const speed = Math.hypot(vx, vy);

    if (y > maxHeightReached) maxHeightReached = y;
    callbacks.onFrame({ x, y, vx, vy, speed, t });

    if (elapsedSeconds < timeOfFlight) {
      requestAnimationFrame(frame);
    } else {
      callbacks.onComplete({
        maxHeightReached,
        rangeReached: x,
        timeOfFlight,
        theoreticalMaxHeight: maxHeight,
        theoreticalRange: maxDistance,
      });
    }
  }
  requestAnimationFrame(frame);
}

const drawEngine = new DrawObj();
// const
const lineWidth = 3;
const color = "black";
drawEngine.setLineWidthnColor(3, "black");

// function to add to event listener and called uppon
const redraw = (trailX, trailY) => {
  drawEngine.resizeCanvas();
  drawEngine.clear();
  drawEngine.drawGrid();
  drawEngine.drawAxis();

  drawEngine.drawDashPlot(trailX, trailY);
  const lengthI = trailX.length - 1;
  const maximum = trailY.indexOf(Math.max(...trailY));

  // draw x and y lines
  drawEngine.setLineWidthnColor(lineWidth - 1, "#444444");
  drawEngine.drawDashPlot(
    [0, trailX[lengthI]],
    [trailY[lengthI], trailY[lengthI]],
  );
  drawEngine.drawDashPlot(
    [trailX[lengthI], trailX[lengthI]],
    [0, trailY[lengthI]],
  );

  // draw maximum line
  drawEngine.drawDashPlot(
    [trailX[maximum], trailX[maximum]],
    [0, trailY[maximum]],
  );

  // draw maximum dots
  drawEngine.setLineWidthnColor(lineWidth - 1, "red");
  drawEngine.drawCirc(trailX[maximum], trailY[maximum]);

  drawEngine.setLineWidthnColor(lineWidth, color);

  drawEngine.drawNumber();
  drawEngine.drawCirc(trailX[lengthI], trailY[lengthI]);
};

// adding EventListener to window changes in canvas
let prevW = window.innerWidth;
let prevH = window.innerHeight;

const listener = window.addEventListener("resize", () => {
  if (
    Math.abs(prevH - window.innerHeight) >= deltaUpdateCanvasToWindow ||
    Math.abs(prevW - window.innerWidth) >= deltaUpdateCanvasToWindow
  ) {
    prevW = window.innerWidth;
    prevH = window.innerHeight;
    redraw();
    // console.log(window.innerWidth, window.innerHeight);
  }
});

const runButton = document.getElementById("runBtn");

runButton.addEventListener("click", () => {
  const v0 = parseFloat(document.getElementById("speedInput").value);
  const angle = parseFloat(document.getElementById("angleInput").value);
  const g = parseFloat(document.getElementById("gravityInput").value);

  if (!v0 || v0 <= 0 || angle == null || !g || g <= 0) {
    alert("Please enter valid speed, angle, and gravity values.");
    return;
  }

  runButton.disabled = true;
  runButton.style.color = "#81867a";
  const xlist = [];
  const ylist = [];

  runSimulation(v0, angle, g, {
    onFrame: ({ x, y, vx, vy, speed, t }) => {
      xlist.push(x);
      ylist.push(y);

      redraw(xlist, ylist);

      document.getElementById("coordDisplay").textContent =
        `x: ${x.toFixed(2)}, y: ${Math.max(y, 0).toFixed(2)}`;
      document.getElementById("speedDisplay").textContent =
        `speed: ${speed.toFixed(2)} m/s`;
    },
    onComplete: ({ maxHeightReached, rangeReached }) => {
      document.getElementById("maxHeightDisplay").textContent =
        `Max height: ${maxHeightReached.toFixed(2)} m`;
      document.getElementById("maxDistanceDisplay").textContent =
        `Max distance: ${rangeReached.toFixed(2)} m`;
      runButton.disabled = false;
      runButton.style.color = "white";
    },
  });
});

redraw();
