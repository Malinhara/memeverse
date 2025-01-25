const aboutButton = document.getElementById('aboutButton');
const aboutModal = document.getElementById('aboutModal');
const closeModalBtn = document.getElementById('closeModalBtn3');

// Show the modal when the About button is clicked
aboutButton.addEventListener('click', () => {
  aboutModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
  aboutModal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === aboutModal) {
    aboutModal.style.display = 'none';
  }
});



document.getElementById("musicButton").addEventListener("click", function () {
    const audio = document.getElementById("audioPlayer");
    if (audio.paused) {
        audio.play();
        this.textContent = "Stop Music"; // Change button text
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
        this.textContent = "Music"; // Change button text back
    }
});
