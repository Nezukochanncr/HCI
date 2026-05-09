// script.js

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

function toggleChat(){
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");

    const icon = heart.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  });
});

// simple chat reply (demo lang)
function sendMessage(){
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  if(input.value.trim() === "") return;

  // user message
  let userMsg = document.createElement("p");
  userMsg.textContent = input.value;
  userMsg.style.textAlign = "right";
  userMsg.style.background = "#d1f0ff";
  userMsg.style.padding = "8px";
  userMsg.style.borderRadius = "8px";
  chatBody.appendChild(userMsg);

  // bot reply
  let botMsg = document.createElement("p");
  botMsg.textContent = "Thank you! Our team will assist you shortly.";
  botMsg.classList.add("bot");
  chatBody.appendChild(botMsg);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

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

const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".villa-info button").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Villa Filter
function filterVillas(){

  const searchInput = document.getElementById("searchInput");
const villas = document.querySelectorAll(".villa-card");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  villas.forEach(villa => {
    const location = villa.getAttribute("data-location").toLowerCase();

    if (location.includes(value)) {
      villa.style.display = "block";
    } else {
      villa.style.display = "none";
    }
  });
});
