let noCount = 0;
const noMessages = [
    "สวัสดี เป็นแฟนกับเราไหม 💌",
    "เอ๊ะ! ไม่เป็นจริงๆ หรอ? 🥺",
    "ลองคิดดูอีกทีนะ! 💕",
    "คิดดีแล้วหรอ? 😭",
    "ถ้าเป็นแฟนกัน เราจะพาไปกินของอร่อย! 🍰",
    "เราให้เธอเลือกของขวัญได้เลย! 🎁",
    "เป็นแฟนกันแล้วจะได้กอดฟรีทุกวัน! 🤗",
    "เอาล่ะ... ไม่มีทางเลือกแล้ว! 😏"
];

const noTexts = [
    "ไม่เอา ไม่เป็น",
    "พูดจริงๆ",
    "ไม่แน่ใจเท่าไหร่",
    "ไม่เชื่อ",
    "ไม่เป็นไร เดี๋ยวซื้อกินเองได้",
    "โตแล้ว ไม่เป็นไร โอ๋ทำไม",
    "หมอนข้างก็ทำได้นะ..."
];

function yesClick() {
    document.getElementById("question").innerHTML = "เย้! เป็นแฟนกันแล้ว ❤️ ฉันจะดูแลเธอให้ดีที่สุด!";

    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    let hint = document.createElement("p");
    hint.id = "hint";
    hint.innerText = "อย่าลืมแคปส่งให้คนที่ส่งเว็บนี้มาด้วยล่ะ\nแต่ถ้าเข้ามาดูด้วยตัวเองก็ไม่เป็นไรนะ เข้าใจๆ";
    document.querySelector(".container").appendChild(hint);

    // เล่นเสียงเฮ
    document.getElementById("cheer").play();

    // เริ่มโปรยดอกไม้
    startConfetti();
}

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