// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Mobile Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Booking Form Validation
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if(name === "" || email === ""){
    alert("Please fill in all required fields.");
  } else {
    alert("Booking submitted successfully!");
    bookingForm.reset();
  }
});

// Testimonials Slider
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonials(){

  testimonials.forEach(t => t.classList.remove("active"));

  testimonials[index].classList.add("active");

  index++;

  if(index >= testimonials.length){
    index = 0;
  }
}

setInterval(showTestimonials, 3000);

// Villa Filter
function filterVillas(){

  function filterVillas() {

  const locationInput = document
    .getElementById("locationFilter")
    .value
    .trim()
    .toLowerCase();

  const guestInput = document.getElementById("guestFilter").value;

  const priceInput = document.getElementById("priceFilter").value;

  const villas = document.querySelectorAll(".villa-card");

  villas.forEach(villa => {

    const villaLocation = villa.dataset.location.toLowerCase();

    const villaGuests = parseInt(villa.dataset.guests);

    const villaPrice = parseInt(villa.dataset.price);

    let show = true;

    // LOCATION SEARCH
    if (
      locationInput !== "" &&
      !villaLocation.includes(locationInput)
    ) {
      show = false;
    }

    // GUEST FILTER
    if (
      guestInput !== "" &&
      villaGuests < parseInt(guestInput)
    ) {
      show = false;
    }

    // PRICE FILTER
    if (
      priceInput !== "" &&
      villaPrice < parseInt(priceInput)
    ) {
      show = false;
    }

    villa.style.display = show ? "block" : "none";
  });
}

  const location = document.getElementById("locationFilter").value.toLowerCase();
}
