// MOBILE MENU
const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  if(navLinks.style.display === "flex"){

    navLinks.style.display = "none";

  } else {

    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";

  }

});

// LIGHTBOX
const galleryImages =
document.querySelectorAll(".gallery-img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeBtn =
document.querySelector(".close");

galleryImages.forEach(img => {

  img.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = img.src;

  });

});

closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

// BOOKING FORM
const bookingForm =
document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Booking Submitted!");

  bookingForm.reset();

});

// SEARCH FILTER
function filterVillas(){

  const locationInput =
  document.getElementById("locationFilter")
  .value
  .toLowerCase();

  const guestInput =
  document.getElementById("guestFilter")
  .value;

  const priceInput =
  document.getElementById("priceFilter")
  .value;

  const villas =
  document.querySelectorAll(".villa-card");

  villas.forEach(villa => {

    const villaLocation =
    villa.dataset.location.toLowerCase();

    const villaGuests =
    parseInt(villa.dataset.guests);

    const villaPrice =
    parseInt(villa.dataset.price);

    let show = true;

    // LOCATION
    if(
      locationInput !== "" &&
      !villaLocation.includes(locationInput)
    ){
      show = false;
    }

    // GUESTS
    if(
      guestInput !== "" &&
      villaGuests < parseInt(guestInput)
    ){
      show = false;
    }

    // PRICE
    if(
      priceInput !== "" &&
      villaPrice < parseInt(priceInput)
    ){
      show = false;
    }

    villa.style.display =
    show ? "block" : "none";

  });

}
