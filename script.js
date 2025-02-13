let noCount = 0;
const noMessages = [
    "สวัสดี เป็นแฟนกับเราไหม 💌",
    "เอ๊ะ! ไม่เป็นจริงๆ หรอ? T T 💔",
    "คิดดีแล้วหรอ? แบบนั้นเราคงเสียใจแย่เลย",
    "อันนี้รู้ไหมว่า ถึงกด 'ปฏิเสธ' ไปเรื่อยๆก็แพ้อยู่ดีนะ 🤭",
    "แต่ถ้าเป็นแฟนเรา เราจะพาเธอไปกินของอร่อยนะ! 🍰",
    "เธอจะมีคนให้คอยฟ้องเวลาใครมาแกล้งด้วยนะ",
    "แถมถ้าเป็นแฟนกัน เราให้เธอกอดฟรีได้ทุกวันเลย",
    "โอเค... คงต้องใช้วิธีสุดท้ายแล้วล่ะ! 😏"
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
    document.getElementById("question").innerHTML = "เย้! เป็นแฟนกันแล้ว ❤️\nหลังจากนี้ทุกๆวันที่เราอยู่ด้วยกัน\nมันจะเป็นวันที่ดีที่สุดเลย!✨";

    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    let hint = document.createElement("p");
    hint.id = "hint";
    hint.innerText = "อย่าลืมแคปส่งไปให้คนที่ส่งเว็บนี้ให้ดูด้วยล่ะ\nแต่ถ้าเข้ามาด้วยตัวเองก็ไม่เป็นไรนะ เข้าใจๆ";
    document.querySelector(".container").appendChild(hint);

    let cheer = new Audio('cheer.mp3');
    cheer.play();

    startConfetti();
}

function noClick() {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    if (noCount < noMessages.length - 1) {
        document.getElementById("question").innerHTML = noMessages[noCount];

        noBtn.innerHTML = noTexts[noCount];
        noBtn.style.transform = `scale(${1 - (noCount * 0.1)})`; // ลดอัตราการหด
        yesBtn.style.transform = `scale(${1 + (noCount * 0.05)})`;

        noCount++;
    } else {
        document.getElementById("question").innerHTML = noMessages[noCount];
        noBtn.style.display = "none";
        yesBtn.style.transform = "translateX(0) scale(1.2)";
    }
}

function toggleBGM() {
    let bgm = document.getElementById("bgm");
    bgm.paused ? bgm.play() : bgm.pause();
}