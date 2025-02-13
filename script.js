let noCount = 0;
const noMessages = [
    "สวัสดี เป็นแฟนกับเราไหม 💌",
    "เอ๊ะ! ไม่เป็นจริงๆ หรอ? TT",
    "คิดดีแล้วหรอ? 😭",
    "แต่ถ้าเป็นแฟนกัน เราจะพาเธอไปกินของอร่อยนะ! 🍰",
    "เธอจะมีคนให้คอยฟ้องเวลาใครมาแกล้งด้วยนะ",
    "แถมถ้าเป็นแฟนกันเราให้เธอกอดฟรีได้ทุกวันเลย",
    "โอเค... คงต้องใช้วิธีสุดท้ายแล้วล่ะ! 😏"
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
    document.getElementById("question").innerHTML = "เย้! เป็นแฟนกันแล้ว ❤️ หลังจากนี้ทุกๆวันที่เราอยู่ด้วยกัน มันจะเป็นวันที่ดีที่สุดเลย!✨";
    document.getElementById("question").style.fontSize = "36px";
    
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    // เพิ่มข้อความแคปส่ง
    let hint = document.createElement("p");
    hint.id = "hint";
    hint.innerText = "อย่าลืมแคปส่งไปให้คนที่ส่งเว็บนี้ให้ดูด้วยล่ะ แต่ถ้าเข้ามาด้วยตัวเองก็ไม่เป็นไรนะ เข้าใจๆ";
    document.querySelector(".container").appendChild(hint);

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

        // ปรับข้อความปฏิเสธให้เปลี่ยนไปเรื่อยๆ
        noBtn.innerHTML = noTexts[noCount];

        // Shrinking Effect
        noBtn.style.transform = "scale(0.85)";

        // Expanding Effect
        yesBtn.style.transform = "scale(1.15)";

        // เถิบลงมาให้สมดุล
        document.querySelector(".buttons").style.marginTop = "50px";

        noCount++;
    } else {
        document.getElementById("question").innerHTML = "สุดท้ายเธอก็ต้องเป็นแฟนเราอยู่ดี! 😘";
        document.getElementById("yesBtn").style.transform = "scale(1.2)";
        noBtn.style.display = "none";
    }
}