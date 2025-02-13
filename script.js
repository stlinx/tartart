function typeText(element, text, speed = 50, callback) {
    let i = 0;
    element.innerHTML = "";

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
    let question = document.getElementById("question");
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");

    // ซ่อนปุ่มทั้งหมดก่อน
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // ทำให้ข้อความพิมพ์ทีละตัวและดันขึ้นทีละบรรทัด
    typeText(question, "เย้! เป็นแฟนกันแล้ว ❤️", 50, function() {
        question.innerHTML += "<br>";
        typeText(question, "หลังจากนี้ทุกๆวันที่เราอยู่ด้วยกัน", 50, function() {
            question.innerHTML += "<br>";
            typeText(question, "มันจะเป็นวันที่ดีที่สุดเลย!✨", 50, function() {
                // เพิ่มข้อความแคปส่ง
                let hint = document.createElement("p");
                hint.id = "hint";
                hint.innerText = "อย่าลืมแคปส่งไปให้คนที่ส่งเว็บนี้ให้ดูด้วยล่ะ\nแต่ถ้าเข้ามาด้วยตัวเองก็ไม่เป็นไรนะ เข้าใจๆ";
                hint.style.opacity = "0"; 
                document.querySelector(".container").appendChild(hint);

                // ทำให้ข้อความแคปส่งค่อยๆ ปรากฏขึ้น
                setTimeout(() => {
                    hint.style.opacity = "1";
                }, 1500);

                // เล่นเสียงเฮ
                let cheer = new Audio('cheer.mp3');
                cheer.play();

                // เริ่มโปรยดอกไม้
                startConfetti();
            });
        });
    });
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