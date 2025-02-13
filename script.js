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

let noCount = 0;

function typeMessage(text) {
    const element = document.getElementById("question");
    element.innerHTML = ""; 
    [...text].forEach((char, index) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.textContent = char;
            span.classList.add("typing-effect");
            element.appendChild(span);
        }, index * 50);
    });
}

function yesClick() {
    typeMessage("เย้! เป็นแฟนกันแล้ว ❤️ หลังจากนี้ทุกๆวันที่เราอยู่ด้วยกัน มันจะเป็นวันที่ดีที่สุดเลย!✨");
    document.getElementById("yesBtn").style.animation = "expand 0.5s forwards";
    document.getElementById("noBtn").style.animation = "shrink 0.5s forwards";
}

function noClick() {
    if (noCount < noMessages.length - 1) {
        typeMessage(noMessages[noCount]);
        document.getElementById("noBtn").innerHTML = noTexts[noCount];
        noCount++;
    } else {
        yesClick();
    }
}