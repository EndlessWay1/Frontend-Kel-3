// CONSTANT
const deltaUpdateCanvasToWindow = 20;
const boxSize = 16; // in pixel
const __AxisLineWitdh = 3;
const __AxisLineColor = "black";
const __HAxisOffset = 4;
const __VAxisOffset = 4;
const __GridLineWidth = 1;
const __GridLineColor = "#44444430";
const __DashedLine = [4, 4];
const __XNumberGap = 4;
const __YNumberGap = 4;
const __FontSize = 8;

class DrawObj {
  constructor(lwidth, color) {
    this.canvas = document.getElementById("canvasObj");
    this.ctx = this.canvas.getContext("2d");
    this.resizeCanvas();
    this.setLineWidthnColor(lwidth ?? 1, color ?? "black");
  }

  setLineWidthnColor(lwidth, color) {
    this.lwidth = lwidth;
    this.color = color;
    this.ctx.lineWidth = lwidth;
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
  }

  /**
   * Change the canvas width and height, also refresh the ctx
   */
  resizeCanvas() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.setLineWidthnColor(this.lwidth, this.color);
  }

  /**
   * Draws a Grid in Canvas
   */
  drawGrid() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    // set color Grid
    {
      this.ctx.lineWidth = __GridLineWidth;
      this.ctx.strokeStyle = __GridLineColor;
    }

    this.ctx.beginPath();
    {
      // make vertical line
      for (let x = 0; x < width; x += boxSize) {
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, height);
      }
      // make horizontal line
      for (let y = 0; y < height; y += boxSize) {
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(width, y);
      }
    }
    this.ctx.stroke();
    // reset ctx params
    {
      this.ctx.lineWidth = this.lwidth;
      this.ctx.strokeStyle = this.color;
    }
  }

  /**
   * Draws 2D Axis in Canvas
   */
  drawAxis() {
    const width = this.canvas.width;
    const height = this.canvas.height;

    const endPointH = (Math.floor(height / boxSize) - __VAxisOffset) * boxSize;
    const endPointW = (Math.floor(width / boxSize) - 2) * boxSize;

    // set the axis color
    {
      this.ctx.lineWidth = __AxisLineWitdh;
      this.ctx.strokeStyle = __AxisLineColor;
    }

    this.ctx.beginPath();

    // make horizontal and vertical lines
    {
      this.ctx.moveTo(__HAxisOffset * boxSize, 2 * boxSize);
      this.ctx.lineTo(__HAxisOffset * boxSize, height);
      this.ctx.moveTo(0, endPointH);
      this.ctx.lineTo(endPointW, endPointH);
    }

    // =========== make little arrow in y axis ===========
    {
      this.ctx.moveTo(__HAxisOffset * boxSize, 2 * boxSize);
      this.ctx.ellipse(
        boxSize * (__HAxisOffset - 1),
        boxSize * 2,
        boxSize,
        boxSize,
        Math.PI / 4,
        1.75 * Math.PI,
        2.15 * Math.PI,
      );
    }
    {
      this.ctx.moveTo(
        (1 + __HAxisOffset) * boxSize + boxSize * Math.cos(0.6 * Math.PI),
        2 * boxSize + boxSize * Math.sin(0.6 * Math.PI),
      );
      this.ctx.ellipse(
        boxSize * (__HAxisOffset + 1),
        boxSize * 2,
        boxSize,
        boxSize,
        -2 * Math.PI,
        0.6 * Math.PI,
        1 * Math.PI,
      );
    }
    // ===================================================

    // =========== make little arrow in x axis ===========
    {
      this.ctx.moveTo(
        endPointW - boxSize * Math.cos(0.1 * Math.PI),
        endPointH + boxSize - boxSize * Math.sin(0.1 * Math.PI),
      );
      this.ctx.ellipse(
        endPointW,
        endPointH + boxSize,
        boxSize,
        boxSize,
        -Math.PI,
        0.1 * Math.PI,
        0.5 * Math.PI,
      );
    }
    {
      this.ctx.moveTo(
        endPointW - boxSize * Math.cos(1.5 * Math.PI),
        endPointH - boxSize - boxSize * Math.sin(1.5 * Math.PI),
      );
      this.ctx.ellipse(
        endPointW,
        endPointH - boxSize,
        boxSize,
        boxSize,
        -Math.PI,
        1.5 * Math.PI,
        1.9 * Math.PI,
      );
    }
    // ===================================================

    this.ctx.stroke();
    // reset ctx params
    {
      this.ctx.lineWidth = this.lwidth;
      this.ctx.strokeStyle = this.color;
    }
  }

  // convert X Cords to our system
  convertXNum(x) {
    return (x + __HAxisOffset) * boxSize;
  }

  // convert Y Cords to our system
  /**
   *
   * @param {number} y cords in boxes to convert
   * @returns
   */
  convertYNum(y) {
    const endPointH =
      Math.floor(this.canvas.height / boxSize - __VAxisOffset) * boxSize;
    return endPointH - y * boxSize;
  }

  /**
   * Fungsi yang digunakan untuk menggambar vector
   * @param {number} x initial x
   * @param {number} y initial y
   * @param {number} vx velocity x
   * @param {number} vy velocity y
   */
  drawVect(x, y, vx, vy) {
    // added 2 because of the offset
    const newX = this.convertXNum(x + 2);
    const newY = this.convertYNum(y + 2);
    const newXt = this.convertXNum(x + vx);
    const newYt = this.convertYNum(y + vy);

    this.ctx.beginPath();

    // draw line
    this.ctx.moveTo(newX, newY);
    this.ctx.lineTo(newXt, newYt);

    const angle = Math.atan2(newYt - newY, newXt - newX);
    const length = Math.sqrt(vx * vx + vy * vy);
    const arrowLength = boxSize * Math.log10(length);
    const wingAngle = 0.1 * Math.PI; // angle between shaft and each wing

    const cordsX1 = newXt - arrowLength * Math.cos(angle - wingAngle);
    const cordsY1 = newYt - arrowLength * Math.sin(angle - wingAngle);
    const cordsX2 = newXt - arrowLength * Math.cos(angle + wingAngle);
    const cordsY2 = newYt - arrowLength * Math.sin(angle + wingAngle);

    this.ctx.moveTo(newXt, newYt);
    this.ctx.lineTo(cordsX1, cordsY1);
    this.ctx.moveTo(newXt, newYt);
    this.ctx.lineTo(cordsX2, cordsY2);
    this.ctx.stroke();
  }

  /**
   * Fungsi yang digunakan untuk menggambar dash plot
   * @param {number[]} x
   * @param {number[]} y
   */
  drawDashPlot(x, y) {
    const convertX = x.map((num) => this.convertXNum(num));
    const convertY = y.map((num) => this.convertYNum(num));

    this.ctx.beginPath();
    this.ctx.setLineDash(__DashedLine);
    this.ctx.moveTo(convertX[0], convertY[0]);
    for (let i = 1; i < convertX.length; i++) {
      this.ctx.lineTo(convertX[i], convertY[i]);
    }
    this.ctx.stroke();
    this.ctx.setLineDash([]);
  }

  /**
   * Fungsi yang digunakan untuk menggambar plot
   * @param {number[]} x
   * @param {number[]} y
   */
  drawPlot(x, y) {
    const convertX = x.map((num) => this.convertXNum(num));
    const convertY = y.map((num) => this.convertYNum(num));

    this.ctx.beginPath();
    this.ctx.moveTo(convertX[0], convertY[0]);
    for (let i = 1; i < convertX.length; i++) {
      this.ctx.lineTo(convertX[i], convertY[i]);
    }
    this.ctx.stroke();
  }

  drawNumber() {
    const width = this.canvas.width;
    const height = this.canvas.height;

    const endPointH =
      (Math.floor(height / boxSize) - __VAxisOffset + 1) * boxSize;
    const endPointW = (Math.floor(width / boxSize) - 2) * boxSize;

    this.ctx.font = `${__FontSize}px serif`;
    // draw x axis
    for (
      let i = (__HAxisOffset - 1) * boxSize, v = 0;
      i < endPointW;
      i += boxSize * __XNumberGap, v += __XNumberGap
    ) {
      this.ctx.fillText(v, i, endPointH - boxSize / 4, boxSize);
    }
    // draw y axis
    for (
      let i = endPointH - boxSize / 4, v = 0;
      i >= 2 * boxSize;
      i -= boxSize * __YNumberGap, v += __YNumberGap
    ) {
      this.ctx.fillText(v, (__VAxisOffset - 1) * boxSize, i, boxSize);
    }
  }
}

const drawEngine = new DrawObj();
drawEngine.setLineWidthnColor(3, "black");

// function to add to event listener and called uppon
const redraw = () => {
  drawEngine.resizeCanvas();
  drawEngine.drawGrid();
  drawEngine.drawAxis();
  drawEngine.drawVect(10, 10, 10, -2);
  drawEngine.drawDashPlot([1, 2, 3, 4, 5, 6], [1, 4, 9, 16, 25, 36]);
  drawEngine.drawPlot([7, 8, 9, 10, 11, 12], [1, 4, 9, 16, 25, 36]);
  drawEngine.drawNumber();
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
redraw();
