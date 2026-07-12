const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    // Font size between 10px and 20px
    this.size = Math.random() * 10 + 10;
    this.speedX = Math.random() * 0.8 - 0.4;
    this.speedY = Math.random() * 0.8 - 0.4;
    // Random opacity for a depth effect
    this.opacity = Math.random() * 0.3 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around screen so they don't disappear
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }
  draw() {
    ctx.fillStyle = `rgba(58, 46, 42, ${this.opacity})`;
    ctx.font = `bold ${this.size}px "Segoe UI", sans-serif`;
    ctx.fillText("ca", this.x, this.y); // Draws the letters "ca"
  }
}

function init() {
  particlesArray = [];
  // 50 particles is usually enough for a clean look
  for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}

init();
animate();
