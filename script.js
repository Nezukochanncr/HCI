// =====================
// LOADER
// =====================
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});


// =====================
// MOBILE NAV
// =====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// =====================
// HEART FAVORITE (fixed duplicate issue)
// =====================
document.addEventListener("click", function (e) {
  const heart = e.target.closest(".heart");

  if (!heart) return;

  heart.classList.toggle("active");

  const icon = heart.querySelector("i");
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
});


// =====================
// SEARCH + SUGGESTIONS
// =====================
const input = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

const locations = [
  "Tagaytay","Batangas","Laguna","Baguio","Rizal","Cavite",
  "Palawan","Cebu","Siargao","Zambales","Antipolo","Quezon",
  "Davao","Iloilo","Bacolod","La Union","Boracay","Pampanga",
  "Subic","Albay","Mindoro","Siquijor","Dumaguete","Bohol"
];

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (!value) {
    suggestionsBox.style.display = "none";
    filterVillas(""); // reset
    return;
  }

  const filtered = locations.filter(loc =>
    loc.toLowerCase().includes(value)
  );

  if (filtered.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  filtered.forEach(loc => {
    const div = document.createElement("div");
    div.textContent = loc;

    div.onclick = () => {
      input.value = loc;
      suggestionsBox.style.display = "none";
      filterVillas(loc);
    };

    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = "block";
});

// hide dropdown
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    suggestionsBox.style.display = "none";
  }
});


// =====================
// FILTER VILLAS (FIXED — removed duplicate function)
// =====================
function filterVillas(location = "") {
  const villas = document.querySelectorAll(".villa-card");

  villas.forEach(villa => {
    const loc = villa.getAttribute("data-location").toLowerCase();

    if (!location || loc.includes(location.toLowerCase())) {
      villa.style.display = "block";
    } else {
      villa.style.display = "none";
    }
  });
}


// =====================
// LIGHTBOX (FIXED selector)
// =====================
const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".lightbox .close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});


// =====================
// CHAT TOGGLE
// =====================
function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display =
    chatBox.style.display === "flex" ? "none" : "flex";
}


// =====================
// CHAT MESSAGE
// =====================
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  if (!input.value.trim()) return;

  const userMsg = document.createElement("p");
  userMsg.textContent = input.value;
  userMsg.style.textAlign = "right";
  userMsg.style.background = "#d1f0ff";
  userMsg.style.padding = "8px";
  userMsg.style.borderRadius = "8px";

  chatBody.appendChild(userMsg);

  const botMsg = document.createElement("p");
  botMsg.textContent = "Thank you! Our team will assist you shortly.";
  botMsg.classList.add("bot");

  chatBody.appendChild(botMsg);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}


// =====================
// BOOKING FORM
// =====================
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = bookingForm.querySelector('input[placeholder="Full Name"]').value;
  const email = bookingForm.querySelector('input[type="email"]').value;

  if (!name || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Booking submitted successfully!");
  bookingForm.reset();
});


// =====================
// TESTIMONIAL SLIDER
// =====================
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(() => {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");

  index = (index + 1) % testimonials.length;
}, 3000);


// =====================
// BOOKING MODAL
// =====================
const modal = document.getElementById("bookingModal");
const modalClose = document.querySelector("#bookingModal .close");

document.querySelectorAll(".villa-info button").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
