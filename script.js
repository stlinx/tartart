let noCount = 0;
const noMessages = [
    "สวัสดี เป็นแฟนกับเราไหม 💌",
    "เอ๊ะ! ไม่เป็นจริงๆ หรอ? T T 💔",
    "คิดดีแล้วหรอ? แบบนั้นเราคงเสียใจแย่เลย😔",
    "อันนี้รู้ไหมว่า ถึงกด 'ปฏิเสธ' ไปเรื่อยๆก็ได้เป็นอยู่ดีนะ😘",
    "แต่ถ้าเป็นแฟนเรา เราจะพาเธอไปกินของอร่อยนะ! 🍰",
    "เธอจะมีคนให้คอยฟ้องเวลาใครมาแกล้งด้วยนะ💪🏻",
    "แถมถ้าเป็นแฟนกัน เราให้เธอกอดฟรีได้ทุกวันเลย!!",
    "โอเค... คงต้องใช้วิธีสุดท้ายแล้วล่ะ!!!"
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

    // ปรับตำแหน่งข้อความให้ขึ้นตรงกลาง
    question.style.position = "absolute";
    question.style.top = "50%";
    question.style.left = "50%";
    question.style.transform = "translate(-50%, -50%)";

    // ข้อความตอนจบแบบพิมพ์ทีละตัว
    let finalText = [
        "เย้! เป็นแฟนกันแล้ว ❤️",
        "มาทำให้เวลานี้ในทุกๆวันที่เราอยู่ด้วยกัน",
        "เป็นวันที่เรามีความสุขที่สุดกันนะ!✨"
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

function noClick() {
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");
    let question = document.getElementById("question");

    if (noCount < noMessages.length - 1) {
        question.innerHTML = noMessages[noCount]; // เปลี่ยนคำถาม
        noBtn.innerHTML = noTexts[noCount]; // เปลี่ยนข้อความปุ่มปฏิเสธ

        // หดปุ่มปฏิเสธ
        let scaleValue = 1 - (noCount * 0.08); // ลดขนาดทีละ 8%
        noBtn.style.transform = `scale(${scaleValue})`;
        noBtn.style.fontSize = `${Math.max(12, 20 - (noCount * 2))}px`; // ลดขนาดฟ้อนท์ป้องกันอ่านไม่ได้

        // ขยายปุ่มตกลง
        let growValue = 1 + (noCount * 0.05);
        yesBtn.style.transform = `scale(${growValue})`;

        noCount++;
    } else {
        // ข้อความสุดท้าย -> ปิดปุ่มปฏิเสธ
        question.innerHTML = noMessages[noCount];
        noBtn.style.display = "none";
        yesBtn.style.transform = "translateX(0) scale(1.2)";
    }
}