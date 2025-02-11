document.addEventListener("DOMContentLoaded", function () {
    let text = "This is the first photo I saw of you.\nI didn't knew you. Didn't knew anything about you.\nNot many things matched between us. But there was something \nin your eyes which made me come to you.\n\nTumhare chehre mein mujhe voh masoomiyat dikhi jo pehle kabhi nahi dekhi thi.\nAt that time I just sent you a request on instincts but today I can proudly say that was the best decision of my life...";

    let index = 0;
    let speed = 100;
    let element = document.getElementById("typed-text");

    function typeWriter() {
        if (index < text.length) {
            if (text.charAt(index) === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
