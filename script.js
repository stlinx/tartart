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
    question.style.opacity = "1"; // ให้แน่ใจว่าข้อความแสดง

    function typeLine(lineIndex) {
        if (lineIndex >= finalText.length) return; // หยุดเมื่อพิมพ์ครบทุกบรรทัด

        let text = finalText[lineIndex];
        let j = 0;
        let tempText = "";

        function typing() {
            if (j < text.length) {
                tempText += text[j];
                question.innerHTML = tempText;
                j++;
                setTimeout(typing, 50); // ปรับความเร็วพิมพ์ต่ออักษร
            } else {
                setTimeout(() => {
                    question.innerHTML += "<br>"; // เว้นบรรทัด
                    typeLine(lineIndex + 1); // ไปพิมพ์บรรทัดต่อไป
                }, 500); // หน่วงเวลาก่อนขึ้นบรรทัดใหม่
            }
        }

        typing();
    }

    typeLine(0); // เริ่มพิมพ์บรรทัดแรก

    // เพิ่มข้อความแคปส่ง
    setTimeout(() => {
        let hint = document.createElement("p");
        hint.id = "hint";
        hint.innerText = "อย่าลืมแคปส่งไปให้คนที่ส่งเว็บนี้ให้ดูด้วยล่ะ\nแต่ถ้าเข้ามาด้วยตัวเองก็ไม่เป็นไรนะ เข้าใจๆ";
        hint.style.opacity = "0"; // ซ่อนก่อน
        document.querySelector(".container").appendChild(hint);

        setTimeout(() => {
            hint.style.opacity = "1";
        }, 2500);
    }, 2000);

    // เล่นเสียงเฮ
    let cheer = new Audio('cheer.mp3');
    cheer.play();

    // เริ่มโปรยดอกไม้ (Confetti Effect)
    startConfetti();
}