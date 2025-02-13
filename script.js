let noCount = 0;
const noMessages = [
    "เอ๊ะ! ไม่เป็นจริงๆ หรอ? 🥺",
    "ลองคิดดูอีกทีนะ! 💕",
    "คิดดีแล้วหรอ? 😭",
    "ถ้าเป็นแฟนกัน เราจะพาไปกินของอร่อย! 🍰",
    "เราให้เธอเลือกของขวัญได้เลย! 🎁",
    "เป็นแฟนกันแล้วจะได้กอดฟรีทุกวัน! 🤗",
    "เอาล่ะ... ไม่มีทางเลือกแล้ว! 😏"
];

function yesClick() {
    document.getElementById("question").innerHTML = "เย้! เป็นแฟนกันแล้ว ❤️ ฉันจะดูแลเธอให้ดีที่สุด!";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    // เล่นเสียงเฮ
    let cheer = new Audio('cheer.mp3');
    cheer.play();

    // เริ่มโปรยดอกไม้
    startConfetti();
}

function noClick() {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    if (noCount < noMessages.length - 1) {
        document.getElementById("question").innerHTML = noMessages[noCount];

        // ทำให้ปุ่ม "ไม่เป็น" เล็กลงเรื่อยๆ
        let currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        noBtn.style.fontSize = (currentSize * 0.85) + "px";
        noBtn.style.padding = "8px 15px";

        // ทำให้ปุ่ม "เป็นแฟน" ใหญ่ขึ้นเรื่อยๆ
        let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (yesSize * 1.1) + "px";
        yesBtn.style.padding = "18px 35px";

        // ขยับปุ่ม "เป็นแฟน" ไปกลางจอเรื่อยๆ
        yesBtn.style.transform = `translateX(${(noCount + 1) * 10}px)`;

        noCount++;
    } else {
        document.getElementById("question").innerHTML = "สุดท้ายเธอก็ต้องเป็นแฟนเราอยู่ดี! 😘";
        document.getElementById("yesBtn").innerHTML = "เป็นแฟนกัน 💕";
        document.getElementById("noBtn").style.display = "none";
        yesBtn.style.transform = "translateX(0px)";
    }
}

// เอฟเฟคดอกไม้โปรย
function startConfetti() {
    let canvas = document.getElementById("confettiCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for (let i = 0; i < 300; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 5 + 2,
            d: Math.random() * 4
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "pink";
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fill();
        });

        confetti.forEach(c => c.y += c.d);
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}