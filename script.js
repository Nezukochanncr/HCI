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

document.querySelectorAll(".book-btn").forEach(btn => {

  btn.addEventListener("click", (e) => {

    e.stopPropagation();

    const villaName =
      btn.parentElement.querySelector("h3").textContent;

    localStorage.setItem("selectedVilla", villaName);

    window.location.href = "booking.html";

  });

});

function goBooking(villaName){

  localStorage.setItem("selectedVilla", villaName);

  window.location.href = "booking.html";
}

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
    window.location.href = "booking.html";

  });
});


function openVilla(location){

  const modal = document.createElement("div");
  modal.className = "villa-modal";

  let details = "";

  if(location === "Boracay"){
    details = `
      📍 Beachfront, Boracay
      <br><br>
      <b>Featured Amenities:</b>
      <ul>
        <li>36 m² / 388 ft²</li>
        <li>2 Single Beds</li>
        <li>Private Pool</li>
        <li>WiFi & Flat Screen TV</li>
        <li>Air Conditioning</li>
      </ul>
      <p><b>Policy:</b> Non-refundable booking</p>
    `;
  }

  else if(location === "El Nido"){
    details = `
      📍 El Nido, Palawan
      <br><br>
      <b>Featured Amenities:</b>
      <ul>
        <li>Ocean View Villa</li>
        <li>Private Infinity Pool</li>
        <li>2–4 Pax</li>
        <li>Luxury Bathroom</li>
        <li>WiFi & Kitchen</li>
      </ul>
      <p><b>Policy:</b> Book & Pay Now</p>
    `;
  }

  else if(location === "Coron"){
    details = `
      📍 Coron, Palawan
      <br><br>
      <b>Featured Amenities:</b>
      <ul>
        <li>Cliffside Villa</li>
        <li>Sea View Balcony</li>
        <li>2–4 Pax</li>
        <li>Hot Shower</li>
        <li>Air Conditioning</li>
      </ul>
      <p><b>Policy:</b> Non-refundable</p>
    `;
  }

  else if(location === "Cebu"){
    details = `
      📍 Cebu City
      <br><br>
      <b>Featured Amenities:</b>
      <ul>
        <li>Infinity Pool</li>
        <li>Family Villa (4–8 Pax)</li>
        <li>Kitchen & Dining Area</li>
        <li>WiFi & TV</li>
      </ul>
      <p><b>Policy:</b> Free cancellation 24h</p>
    `;
  }

  else if(location === "Siargao"){
    details = `
      📍 Siargao Island
      <br><br>
      <b>Featured Amenities:</b>
      <ul>
        <li>Surf View Villa</li>
        <li>2–4 Pax</li>
        <li>Outdoor Lounge</li>
        <li>WiFi & AC</li>
      </ul>
      <p><b>Policy:</b> Book & Pay Now</p>
    `;
  }

  modal.innerHTML = `
    <div class="villa-box">
      <h2>${location} Villa Details</h2>
      <div>${details}</div>

      <br>
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
    const location = villa.getAttribute("data-location").toLowerCase();

    if (location.includes(input)) {
      villa.style.display = "block";
    } else {
      villa.style.display = "none";
    }
  });
}
