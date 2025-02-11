document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "assets/images/photo1.jpg",
        "assets/images/photo2.jpg",
        "assets/images/photo3.jpg",
        "assets/images/photo4.jpg",
        "assets/images/photo5.jpg"
    ];

    const promises = [
        "Ayushi, On this promise day I would like to promise you something",
        "I promise to always love you the most, no matter what. Jitna pyaar kisi ne na kiya hoga utna karunga",
        "I promise to always stand by your side. Bhagwaan bhi tumhare khilaaf ho to main unse bhi tumhare liye ladunga",
        "I promise to love your family as my own",
        "I promise to choose you, every single day, forever."
    ];

    let imgIndex = 0;
    let textIndex = 0;
    let textElement = document.getElementById("typed-text2");
    let imgElement = document.getElementById("slideshow");

    function updateSlideshow() {
        if (imgIndex < images.length) {
            imgElement.src = images[imgIndex];
            typeText(promises[textIndex]);

            imgIndex++;
            textIndex++;
            setTimeout(updateSlideshow, 8000); // Change every 5 seconds
        }
    }

    function typeText(text) {
        textElement.innerHTML = "";
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }

        typeWriter();
    }

    updateSlideshow(); // Start slideshow
});
