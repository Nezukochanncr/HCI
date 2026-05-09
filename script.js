// 30 villas data
const villas = Array.from({ length: 30 }, (_, i) => ({
  name: "Luxury Villa " + (i + 1),
  location: ["Cavite", "Batangas", "Laguna", "Boracay"][i % 4],
  price: 5000 + i * 200,
  image: `https://picsum.photos/400/300?random=${i}`,
  liked: false
}));

const container = document.getElementById("villaContainer");

// render villas
function displayVillas(data) {
  container.innerHTML = "";
  data.forEach((v, i) => {
    container.innerHTML += `
      <div class="villa-card">
        <img src="${v.image}">
        <div class="heart" onclick="toggleHeart(${i})">❤️</div>
        <div class="villa-info">
          <h3>${v.name}</h3>
          <p>${v.location}</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>₱${v.price}/night</p>
          <button>Book Now</button>
        </div>
      </div>
    `;
  });
}

displayVillas(villas);

// filter
function filterVillas() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = villas.filter(v =>
    v.location.toLowerCase().includes(value)
  );
  displayVillas(filtered);
}

// heart
function toggleHeart(i) {
  villas[i].liked = !villas[i].liked;
  displayVillas(villas);
}

// navbar
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// lightbox
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// booking
function submitBooking(e) {
  e.preventDefault();
  alert("Booking Submitted Successfully!");
}
