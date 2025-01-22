<template>
  <canvas ref="canvas" class="circuit-canvas"></canvas>
</template>

<script>
export default {
  name: "Schematic",
  setup() {
    const canvas = ref(null); // Reference to the canvas element
    let ctx;
    let x, y, ix, iy, d, dx, dy;

    const initializeCanvas = () => {
      const canvasElement = canvas.value;
      const wW = window.innerWidth;
      const wH = window.innerHeight;
      canvasElement.width = wW;
      canvasElement.height = wH;
      ctx = canvasElement.getContext("2d");
    };

    const beginCircuit = (a, b) => {
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      x = a;
      y = b;
      d = 0;
      dx = 1;
      dy = 0;
      ix = x;
      iy = y;
      ctx.moveTo(x, y);
      drawWire(50);
      drawPower();
    };

    const endCircuit = () => {
      ctx.lineTo(ix, iy);
      ctx.stroke();
    };

    const drawWire = (length) => {
      x += dx * length;
      y += dy * length;
      ctx.lineTo(x, y);
    };

    const drawPower = () => {
      drawWire(10);
      let n = 3;
      ctx.moveTo(x + 10 * dy, y + 10 * dx);
      ctx.lineTo(x - 10 * dy, y - 10 * dx);
      x += dx * 5;
      y += dy * 5;

      while (n--) {
        ctx.moveTo(x + 15 * dy, y + 15 * dx);
        ctx.lineTo(x - 15 * dy, y - 15 * dx);
        x += dx * 5;
        y += dy * 5;
        ctx.moveTo(x + 10 * dy, y + 10 * dx);
        ctx.lineTo(x - 10 * dy, y - 10 * dx);
        if (n !== 0) {
          x += dx * 5;
          y += dy * 5;
        }
      }
      ctx.moveTo(x, y);
      drawWire(10);
    };

    const drawResistor = () => {
      let n = 5;
      drawWire(10);
      x += dx * 5;
      y += dy * 5;

      while (n--) {
        ctx.lineTo(x - 5 * dy, y - 5 * dx);
        ctx.lineTo(x + 5 * dy, y + 5 * dx);
        x += 5 * dx;
        y += 5 * dy;
      }
      ctx.lineTo(x, y);
      drawWire(10);
    };

    const turnClockwise = () => {
      d++;
      dx = Math.cos(1.570796 * d);
      dy = Math.sin(1.570796 * d);
    };

    const turnCounterClockwise = () => {
      d--;
      dx = Math.cos(1.570796 * d);
      dy = Math.sin(1.570796 * d);
    };

    onMounted(() => {
      if (canvas.value) {
        initializeCanvas();
        // Example circuit drawing
        beginCircuit(100, 100);
        drawResistor();
        turnClockwise();
        drawResistor();
        turnClockwise();
        drawPower();
        endCircuit();
      } else {
        console.error("Canvas element is not available.");
      }
    });

    return {
      canvas,
    };
  },
};
</script>

<style scoped>
.circuit-canvas {
  display: block;
}
</style>