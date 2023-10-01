const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const sliderItems = document.querySelectorAll(".slider-item");
let currentIndex = 0;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// document.getElementById("contactButton").addEventListener("click", () => {
//     // Implement your contact page logic here
//     alert("Contact button clicked!");
// });

function showSlide(index) {
    sliderItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

// Auto-advance the slider every 3 seconds (adjust as needed)
setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}, 3000);

// Initially show the first slide
showSlide(currentIndex);
