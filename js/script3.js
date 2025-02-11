const text = "It had only been around 15 days since we first talked. That night, I was drunk... and out of nowhere, I said it— 'I love you.'\n\nAt first, I brushed it off, thinking, *How could I say 'I love you' to someone so soon?* Maybe it was just the alcohol talking. Maybe I was just caught in the moment.\n\nBut as days passed, I kept thinking about it. And then it hit me—I *did* fall in love with you that night. I just didn't realize it consciously. But somewhere deep inside, my heart already knew. It wasn’t just the drink, it was *you.* It was always you.";

let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // Typing speed
    }
}
window.onload = typeText;
