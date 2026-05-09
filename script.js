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

// Booking Form Validation
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){
  e.preventDefault();

  const toast = document.createElement("div");
  toast.className = "toast-success";
  toast.textContent = "Booking submitted successfully! Check your email for confirmation.";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);

  bookingForm.reset();
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

function toggleChat(){
  const box = document.getElementById("chatbotBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function sendMessage(){
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatBody");

  if(input.value.trim() === "") return;

  // user message
  const userMsg = document.createElement("p");
  userMsg.textContent = input.value;
  userMsg.style.textAlign = "right";
  userMsg.style.background = "#d1e7ff";
  userMsg.style.padding = "8px";
  userMsg.style.borderRadius = "10px";
  userMsg.style.margin = "5px 0";

  chat.appendChild(userMsg);

  // auto reply (luxury concierge style)
  setTimeout(() => {
    const botMsg = document.createElement("p");
    botMsg.className = "bot";

    botMsg.textContent =
      "Thank you! Our concierge will assist you shortly. You may also browse villas or book directly.";

    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 800);

  input.value = "";
}
document.querySelectorAll(".book-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    // smooth scroll to booking section
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });

    // alert message
    alert("Please complete your booking details below.");
    
  });
});

function openVilla(location){

  const modal = document.createElement("div");
  modal.className = "villa-modal";

  modal.innerHTML = `
    <div class="villa-box">
      <h2>${location} Villa Details</h2>

      <p><b>📍 Location:</b> ${location}, Philippines</p>

      <h3>✨ Amenities</h3>
      <ul>
        <li>2–4 Pax Capacity</li>
        <li>Private Pool / Beach Access</li>
        <li>WiFi & TV</li>
        <li>Air Conditioning</li>
        <li>Bathroom & Kitchen</li>
      </ul>

      <h3>📜 Policy</h3>
      <p>Non-refundable booking. Payment required upon reservation.</p>

      <button onclick="closeVilla()">Close</button>
    </div>
  `;

  document.body.appendChild(modal);
}

function closeVilla(){
  document.querySelector(".villa-modal").remove();
}

// Villa Filter
function filterVillas() {
  const input = document.getElementById("locationFilter").value.toLowerCase();
  const villas = document.querySelectorAll(".villa-card");

  villas.forEach(villa => {

    const location = villa.dataset.location.toLowerCase();
    const title = villa.querySelector("h3").textContent.toLowerCase();
    const place = villa.querySelector("p").textContent.toLowerCase();

    if (
      location.includes(input) ||
      title.includes(input) ||
      place.includes(input)
    ) {
      villa.style.display = "block";
    } else {
      villa.style.display = "none";
    }
  });
}
