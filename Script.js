const places = ["Germany", "France", "India", "United States", "Australia"];
let index = 0;

setInterval(() => {
  document.getElementById("changing-place").textContent = places[index];
  index = (index + 1) % places.length;
}, 200);

// Toggle navigation menu for mobile
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/******************************* Checkpoint 2 ***********************/

// Booking form validation and alert
document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const whereTo = document.getElementById("where-to").value;
    const howMany = document.getElementById("how-many").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const description = document.getElementById("description").value;

    // Validate end date is after start date
    if (new Date(endDate) <= new Date(startDate)) {
      alert("End date must be greater than the start date.");
      return;
    }

    // Check if all fields are filled
    if (
      whereTo &&
      howMany &&
      startDate &&
      endDate &&
      description.length >= 50
    ) {
      alert("Booking successful!");
    } else {
      alert("Please fill in all fields correctly.");
    }
  });

/******************************* Checkpoint 3 ***********************/

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const images = document.querySelectorAll(".carousel-track img");

  if (!track || !prevBtn || !nextBtn || images.length === 0) {
    console.error("Carousel elements not found. Check your HTML structure.");
    return;
  }

  let index = 0;
  const totalImages = images.length;

  function updateCarousel() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Next Button Event
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalImages; // Loops directly
    updateCarousel();
  });

  // Previous Button Event
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages; // Loops directly
    updateCarousel();
  });
});

/******************************* Checkpoint 4 ***********************/
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Login form submitted!');
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Registration form submitted!');
});
