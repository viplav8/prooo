document.addEventListener("DOMContentLoaded", function () {
    const text = "That night in October still haunts me. The fight we had—those words I threw at you in anger—if only I could take them back. I wasn’t angry at you… I was angry at the thought of not having more time with you. But instead of telling you how much I needed you, I let my frustration take over. And in return, you did what I never thought you would—you decided to leave.\n\nYour messages that night broke me. Every word you wrote felt like a dagger straight to my heart. *'I’ll never talk to you again.'* . I read them over and over, hoping that somehow, the words would change. But they didn’t. And neither did the pain.\n\nI didn't sleep that night. I just lay there, staring at my phone, hoping for a message, a call—anything that would tell me I hadn’t lost you forever. But morning came, and all I had was silence. And the only thing louder than that silence was the ache inside me.\n\nThat day, you were leaving for home. And I was about to do what I had always done—stay silent. I was always the arrogant one, the one who never backed down. I had lost friendships, relationships, everything—because of my ego, because of the part of me that refused to say *sorry.*\n\nBut that day… something changed. That day, I realized I didn’t care about my ego. I didn’t care about being right. The only thing I cared about was *you.* Losing you wasn’t an option. Life without you wasn’t an option.\n\nSo I did what I had never done before—I swallowed my pride, pushed aside my stubbornness, and ran to the railway station. Not as the arrogant man I had always been, but as a man who was terrified of losing the love of his life. I stood there, heart pounding, waiting for you. Not knowing if you would forgive me, but knowing that I *had* to try. Because I had finally understood something that day—my love for you was greater than my ego, greater than my pride, greater than *anything* I had ever held onto.\n\nAnd I will do this again. A thousand times over, if I have to. Because I love you, Ayushi. And I can never lose you. You are my everything, and that day… that painful, heartbreaking day… made me realize just how much you mean to me.";

    let index = 0;
    let speed = 20;
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

            // Auto-scroll as text appears
            container.scrollTop = container.scrollHeight;

            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

function goToNextPage() {
    window.location.href = "index6.html"; 
}
