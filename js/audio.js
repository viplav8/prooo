document.addEventListener("DOMContentLoaded", function () {
    let audio = document.createElement("audio");
    audio.src = "assets/music/our-song.mp3";
    audio.loop = true;

    // Check if user already started music
    if (localStorage.getItem("musicPlaying") === "true") {
        audio.play();
    }

    // Add play button logic
    let playButton = document.getElementById("play-music");
    if (playButton) {
        playButton.addEventListener("click", function () {
            audio.play();
            localStorage.setItem("musicPlaying", "true");
            this.style.display = "none"; // Hide button after click
        });
    }

    // Store audio in global window object to persist across pages
    window.audioPlayer = audio;
});
