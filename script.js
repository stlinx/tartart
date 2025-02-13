function typeText(element, text, speed = 50, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    typing();
}

function yesClick() {
    let questionContainer = document.getElementById("question-container");
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");

    // ซ่อนปุ่ม
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    let messages = [
        "เย้! เป็นแฟนกันแล้ว ❤️",
        "หลังจากนี้ทุกๆวันที่เราอยู่ด้วยกัน",
        "มันจะเป็นวันที่ดีที่สุดเลย!✨"
    ];

    let delay = 0;
    messages.forEach((msg, index) => {
        setTimeout(() => {
            let line = document.createElement("p");
            line.classList.add("question-line");
            line.style.opacity = "0";
            line.innerHTML = "";
            questionContainer.appendChild(line);

            typeText(line, msg, 50, () => {
                line.style.opacity = "1";
                if (index !== 0) {
                    questionContainer.childNodes.forEach(node => {
                        node.style.transform = `translateY(-${index * 35}px)`;
                    });
                }
            });
        }, delay);
        delay += msg.length * 50 + 500; // คำนวณดีเลย์เพื่อให้แต่ละข้อความเริ่มทีละบรรทัด
    });

    // เพิ่มข้อความแคปส่งให้สีเทาและอยู่ล่างสุด
    setTimeout(() => {
        let hint = document.createElement("p");
        hint.id = "hint";
        hint.innerText = "อย่าลืมแคปให้คนที่ส่งเว็บมาดูด้วยนะ ว่าตอบอะไร\nแต่ถ้าเข้ามาด้วยตัวเองก็ไม่เป็นไรนะ เข้าใจๆ";
        document.querySelector(".container").appendChild(hint);
    }, delay + 1000);

    // เล่นเสียงเฮ
    let cheer = new Audio('cheer.mp3');
    cheer.play();

    // เริ่มโปรยดอกไม้
    startConfetti();
}

// ฟังก์ชันเริ่มต้นเอฟเฟคโปรยดอกไม้
function startConfetti() {
    const confettiCanvas = document.getElementById("confettiCanvas");
    confettiCanvas.style.display = "block";
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 }
    });
}