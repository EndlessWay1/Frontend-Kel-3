// CONSTANTS
const initRadius = 8;
const initlWidth = 1;
const initColor = "#a36e49bb";

class mouseCanvas {
  constructor(n = 10) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.lwidth = initlWidth;
    this.color = initColor;
    // width of line brush
    this.radius = initRadius;

    // size of arrays
    this.length = n;

    this.resizeCanvas();

    // record indicies
    this.currIdx = 0;
    // record currently alived idx
    this.alive = 0;
    this.createArray();
  }

  /**
   * Change the canvas width and height, also refresh the ctx
   */
  resizeCanvas() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.setLineWidthnColor(this.lwidth, this.color);
  }

  setLineWidthnColor(lwidth, color) {
    this.lwidth = lwidth;
    this.color = color;
    this.ctx.lineWidth = lwidth;
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
  }

  createArray() {
    this.X1Arr = new Float32Array(this.length);
    this.X2Arr = new Float32Array(this.length);
    this.Y1Arr = new Float32Array(this.length);
    this.Y2Arr = new Float32Array(this.length);
  }

  recordMouse(curX, curY, prevX, prevY) {
    const angleBottom = Math.atan2(curY - prevY, curX - prevX);
    const angleTop = 0.5 * Math.PI - angleBottom;
    // added minus bcs of the revese axis of Y
    const newCordX1 = Math.cos(angleTop) * this.radius + curX;
    const newCordY1 = -Math.sin(angleTop) * this.radius + curY;
    const newCordX2 = -Math.cos(angleBottom) * this.radius + curX;
    const newCordY2 = Math.sin(angleBottom) * this.radius + curY;

    // update idx
    this.currIdx++;
    this.currIdx %= this.length;
    // make sure alive is not bigger than array
    this.alive = this.alive + 1 > this.length ? this.length : this.alive + 1;
    this.X1Arr[this.currIdx] = newCordX1 > 0 ? newCordX1 : 0;
    this.X2Arr[this.currIdx] = newCordX2 > 0 ? newCordX2 : 0;
    this.Y1Arr[this.currIdx] = newCordY1 > 0 ? newCordY1 : 0;
    this.Y2Arr[this.currIdx] = newCordY2 > 0 ? newCordY2 : 0;
  }

  // sign of cross product (ax,ay)->(bx,by) x (ax,ay)->(cx,cy)
  orient(ax, ay, bx, by, cx, cy) {
    return (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
  }

  segmentsIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
    const d1 = orient(cx, cy, dx, dy, ax, ay);
    const d2 = orient(cx, cy, dx, dy, bx, by);
    const d3 = orient(ax, ay, bx, by, cx, cy);
    const d4 = orient(ax, ay, bx, by, dx, dy);

    return (
      ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
      ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))
    );
  }

  updateArray() {
    let idx = this.currIdx;
    let prevCordX1 = this.X1Arr[idx];
    let prevCordX2 = this.X2Arr[idx];
    let prevCordY1 = this.Y1Arr[idx];
    let prevCordY2 = this.Y2Arr[idx];
    for (let k = 1; k < this.alive; k++) {
      const i = (idx - k + this.length) % this.length;
      let X1 = this.X1Arr[i];
      let X2 = this.X2Arr[i];
      let Y1 = this.Y1Arr[i];
      let Y2 = this.Y2Arr[i];

      const angle1 =
        0.5 * Math.PI -
        Math.atan2(
          1 / this.length,
          Math.sqrt((prevCordX2 - X2) ** 2 + (prevCordY2 - Y2) ** 2),
        );

      const newX2 = Math.cos(angle1) / this.length + X2;
      const newY2 = -Math.sin(angle1) / this.length + Y2;

      const angle2 =
        0.5 * Math.PI -
        Math.atan2(
          1 / this.length,
          Math.sqrt((prevCordX1 - X1) ** 2 + (prevCordY1 - Y1) ** 2),
        );

      const newX1 = Math.cos(angle2) / this.length - X1;
      const newY1 = Math.sin(angle2) / this.length + Y1;

      //   check if dead
      const crossed = segmentsIntersect(
        prevCordX1,
        prevCordY1,
        newX1,
        newY1, // rail 1 segment (A -> B)
        prevCordX2,
        prevCordY2,
        newX2,
        newY2, // rail 2 segment (D -> C)
      );

      if (crossed) {
        this.alive--;
        break;
      }

      prevCordX1 = X1;
      prevCordX2 = X2;
      prevCordY2 = Y2;
      prevCordY1 = Y1;
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
