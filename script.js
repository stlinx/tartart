let noCount = 0;  
const noMessages = [
    "เอ๊ะ! ไม่เป็นจริงๆ หรอ? :pleading_face:",
    "ลองคิดดูอีกทีนะ! :two_hearts:",
    "คิดดีแล้วหรอ? :sob:",
    "ถ้าเป็นแฟนกัน เราจะพาไปกินของอร่อย! :cake:",
    "เราให้เธอเลือกของขวัญได้เลย! :gift:",
    "เป็นแฟนกันแล้วจะได้กอดฟรีทุกวัน! :hugging:",
    "เอาล่ะ... ไม่มีทางเลือกแล้ว! :smirk:"
];

function yesClick() {
    document.getElementById("question").innerHTML = "เย้! เป็นแฟนกันแล้ว :heart: ฉันจะดูแลเธอให้ดีที่สุด!";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";
}

function noClick() {
    if (noCount < noMessages.length - 1) {
        document.getElementById("question").innerHTML = noMessages[noCount];
        document.getElementById("noBtn").innerHTML = "ไม่ คิดดีแล้ว :cry:";
        noCount++;
    } else {
        document.getElementById("question").innerHTML = "สุดท้ายเธอก็ต้องเป็นแฟนเราอยู่ดี! :kissing_heart:";
        document.getElementById("yesBtn").innerHTML = "เป็นแฟนกัน :two_hearts:";
        document.getElementById("noBtn").innerHTML = "เป็นแฟนกัน :two_hearts:";
    }
}