const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 8 + 4;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 + 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 75%)`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push(new Confetti());
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateConfetti);
}

function startConfetti() {
    createConfetti();
    animateConfetti();
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});