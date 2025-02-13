let noCount = 0;
const noMessages = [
    "สวัสดี เป็นแฟนกับเราไหม 💌",
    "เอ๊ะ! ไม่เป็นจริงๆ หรอ? TT",
    "คิดดีแล้วหรอ? 😭",
    "แต่ถ้าเป็นแฟนกัน\nเราจะพาเธอไปกินของอร่อยนะ! 🍰",
    "เธอจะมีคนให้คอยฟ้อง\nเวลาใครมาแกล้งด้วยนะ",
    "แถมถ้าเป็นแฟนกัน\nเราให้เธอกอดฟรีได้ทุกวันเลย",
    "โอเค...\nคงต้องใช้วิธีสุดท้ายแล้วล่ะ! 😏"
];

const noTexts = [
    "ไม่เอา ไม่เป็น",
    "จริงๆ",
    "อาจจะล่ะมั้ง",
    "ไม่เป็นไร ซื้อกินเองได้",
    "โตแล้วไม่เป็นไร",
    "ก็บอกว่าไม่เป็นไง"
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

        if (noCount < noMessages.length - 2) {
            noBtn.style.transform = `scale(${1 - (noCount * 0.1)})`;
            noBtn.style.fontSize = `${30 - (noCount * 3)}px`;
        }

        yesBtn.style.transform = `scale(${1 + (noCount * 0.1)})`;

        noCount++;
    } else {
        yesClick();
    }
}