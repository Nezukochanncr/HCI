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



let currentImages = [];
let currentIndex = 0;

function openVilla(location) {
  const modal = document.createElement("div");
  modal.className = "villa-modal";

  // Gumawa tayo ng simpleng listahan ng amenities base sa location
  const amenitiesList = ["Private Pool", "WiFi", "Kitchen", "Air-conditioned"];

  modal.innerHTML = `
    <div class="villa-box">
      <button class="close-modal" onclick="closeVilla()">×</button>
      
      <h2>${location} Villa Details</h2>

      <div class="slider">
        <button class="prev-btn" onclick="prevImg()">❮</button>
        <img id="sliderImg" src="" onclick="zoomImage(this)" alt="Villa photo">
        <button class="next-btn" onclick="nextImg()">❯</button>
      </div>

      <div class="villa-details-text">
          <p><b>📍 Location:</b> ${location}, Philippines</p>
          <h3>✨ Amenities</h3>
          <ul>
            ${amenitiesList.map(a => `<li>${a}</li>`).join('')}
          </ul>
      </div>

      <button class="book-modal-btn" onclick="goBooking('${location} Villa')">
        Book This Villa
      </button>
    </div>
  `;

  document.body.appendChild(modal);
  
  // Tawagin ang loader para sa images
  loadVillaData(location);
}

function closeVilla(){
  const modal = document.querySelector(".villa-modal");

  if(modal){
    modal.remove();
  }
}

function loadVillaData(location){

  let data = {
    Boracay: [
    "https://images.unsplash.com/photo-1553195029-754fbd369560",
    "https://images.unsplash.com/photo-1708195559744-c2b3e60dbe27",
    "https://images.unsplash.com/photo-1542213493895-edf5b94f5a96",
    "https://images.unsplash.com/photo-1612231393559-9414dc467ef7",
    "https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1",
    ],

    "El Nido": [
      "https://images.unsplash.com/photo-1583685133115-90748ccbe274",
      "https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac",
      "https://images.unsplash.com/photo-1654482278660-14a8cfd5589d",
      "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    ],

    Coron: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1631049035182-249067d7618e",
      "https://images.unsplash.com/photo-1631048730670-ff5cd0d08f15",
      "https://images.unsplash.com/photo-1631048835236-a1c27baeff2c",
      "https://images.unsplash.com/photo-1631048730558-10cd324e0873",
    ],

    Cebu: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
    ],

    Siargao: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
    ]
  };

currentImages = data[location] || data["Boracay"]; // Fallback sa Boracay kung walang mahanap
  currentIndex = 0;

  const imgElement = document.getElementById("sliderImg");
  if (imgElement && currentImages.length > 0) {
    imgElement.src = currentImages[0];
  }
}


function nextImg(){
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById("sliderImg").src = currentImages[currentIndex];
}

function prevImg(){
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById("sliderImg").src = currentImages[currentIndex];
}


function zoomImage(img){

  const zoom = document.createElement("div");
  zoom.className = "zoom-view";

  zoom.innerHTML = `<img src="${img.src}">`;

  zoom.onclick = () => zoom.remove();

  document.body.appendChild(zoom);
}

// Ipalit mo ito sa loob ng openVilla function mo
modal.innerHTML = `
    <div class="villa-box">
      <button class="close-modal" onclick="closeVilla()">×</button>
      
      <h2>${location} Villa Details</h2>

      <div class="slider">
        <button class="prev-btn" onclick="prevImg()">❮</button>
        
        <img id="sliderImg" src="${villa.images[0]}" onclick="zoomImage(this)" alt="Villa photo">
        
        <button class="next-btn" onclick="nextImg()">❯</button>
      </div>

      <div class="villa-details-text">
          <p><b>📍 Location:</b> ${location}, Philippines</p>
          <h3>✨ Amenities</h3>
          <ul>
            ${villa.amenities.map(a => `<li>${a}</li>`).join('')}
          </ul>
      </div>

      <button class="book-modal-btn" onclick="goBooking('${location} Villa')">
        Book This Villa
      </button>
    </div>
  `;


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
