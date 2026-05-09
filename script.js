// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SEARCH FUNCTION
function searchVilla() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const villas = document.querySelectorAll(".villa-card");

  villas.forEach(villa => {
    const location = villa.dataset.location;

    if(location.includes(input)){
      villa.style.display = "block";
    } else {
      villa.style.display = "none";
    }
  });
}

// SCROLL REVEAL
window.addEventListener("scroll", reveal);

function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(item => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;
    const elementVisible = 100;

    if(elementTop < windowHeight - elementVisible){
      item.classList.add("active");
    }
  });
}

reveal();
