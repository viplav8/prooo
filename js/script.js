document.addEventListener("DOMContentLoaded", function () {
    let text = "Meri pyari billi,\n\nDuniya ke sare shabd kam hai yeh batane ke liye ki main tujhse kitna pyar karta hu, \nphir bhi ek koshish karunga aaj. \n\nPyar kya hota hai yeh mujhe pata hi nahi tha, kyunki maine kabhi na voh feel kiya na kabhi mujhe mila. \nSirf filmo mein aur serials mein dekha tha maine pyaar. \n\nSochta tha real mein kaha hota hai aisa, aur kaun hi kar sakta hai itna pyar. \nKhud ko kabhi pyar ho ya kabhi pyar mile yeh to maine socha bhi nahi tha.\n\nPar phir tum mili mujhe...";  

    let index = 0;
    let speed = 80;  
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
    let currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "index.html") {
        window.location.href = "index2.html";
    } else if (currentPage === "index2.html") {
        window.location.href = "index3.html"; // You can add more pages later
    }
}