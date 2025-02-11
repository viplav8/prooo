document.addEventListener("DOMContentLoaded", function () {
    let text  = "The first time we met in NSP, Delhi, is a moment I'll cherish forever. The second I saw you, my heart skipped a beat—just for a moment, everything around me faded, and all I could see was *you.*\n\nYou were shy, nervous, and absolutely beautiful. But the truth is, I was even more nervous than you. I had never felt this way before—this strange mix of excitement, happiness, and a little bit of fear, like I was about to step into something life-changing.\n\nThat day, I gave you a *payal*. It wasn’t just a gift—it was my way of holding onto that moment forever, of telling you, without words, how special you were to me. This picture from that day will always be one of my most treasured memories because it captures the first time we stood face to face, the first time I saw you not just in my heart, but right in front of me.";  

    let index = 0;
    let speed = 100;  
    let element = document.getElementById("typed-text");
    let container = document.querySelector(".container");

    function typeWriter() {
        if (index < text.length) {
            if (text.charAt(index) === "\n") {
                element.innerHTML += "<br>"; 
            } else {
                element.innerHTML += text.charAt(index);
            }
            index++;

            // Auto-scroll effect
            container.scrollTop = container.scrollHeight;

            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Array of different colored heart emojis
    const heartEmojis = ["❤️", "💙", "💚", "💜", "🧡", "💖", "💛"];
    
    // Pick a random heart emoji
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random animation duration (between 2s and 5s)
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Random size for variety
    heart.style.fontSize = Math.random() * 10 + 20 + "px";

    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);

function goToNextPage() {
    window.location.href = "index5.html"; // Navigates to the next page
}
