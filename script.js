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
    let question = document.getElementById("question");
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");

    // ซ่อนปุ่มทั้งหมดก่อน
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // ข้อความตอนจบแบบพิมพ์ทีละตัว
    let finalText = [
        "เย้! เป็นแฟนกันแล้ว ❤️",
        "หลังจากนี้ทุกๆวันที่เราอยู่ด้วยกัน",
        "มันจะเป็นวันที่ดีที่สุดเลย!✨"
    ];

    let i = 0;
    question.innerHTML = ""; // ล้างข้อความเก่า
    question.style.opacity = "1";

    function typeLine(lineIndex) {
        if (lineIndex >= finalText.length) return;

        let text = finalText[lineIndex];
        let j = 0;
        let tempText = "";
        let previousText = question.innerHTML;
        
        function typing() {
            if (j < text.length) {
                tempText += text[j];
                question.innerHTML = previousText + "<br>" + tempText;
                j++;
                setTimeout(typing, 50);
            } else {
                setTimeout(() => {
                    typeLine(lineIndex + 1);
                }, 500);
            }
        }

        typing();
    }

    typeLine(0);

    // เล่นเสียงเฮ
    let cheer = new Audio('cheer.mp3');
    cheer.play();

    // เริ่มโปรยดอกไม้
    startConfetti();
}