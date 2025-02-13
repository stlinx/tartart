function yesClick() {
    let question = document.getElementById("question");
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");

    // ซ่อนปุ่มทั้งหมดก่อน
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // เพิ่มข้อความตอนจบแบบเฟดอิน
    question.innerHTML = "เย้! เป็นแฟนกันแล้ว ❤️<br>หลังจากนี้ทุกๆวันที่เราอยู่ด้วยกัน<br>มันจะเป็นวันที่ดีที่สุดเลย!✨";
    question.style.opacity = "0"; // ตั้งค่าเริ่มต้นเป็นโปร่งใส
    setTimeout(() => {
        question.style.opacity = "1"; // ให้ค่อยๆ ปรากฏขึ้น
    }, 300); // เริ่มต้นเฟดอินหลังจาก 0.3 วินาที

    // เพิ่มข้อความแคปส่ง
    let hint = document.createElement("p");
    hint.id = "hint";
    hint.innerText = "อย่าลืมแคปส่งไปให้คนที่ส่งเว็บนี้ให้ดูด้วยล่ะ\nแต่ถ้าเข้ามาด้วยตัวเองก็ไม่เป็นไรนะ เข้าใจๆ";
    hint.style.opacity = "0"; // ซ่อนก่อน
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
}