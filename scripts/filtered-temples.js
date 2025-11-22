// Footer dynamic year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuToggle.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

const temples = [
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Alabang Philippines ",
    location: "Alabang Muntinlupa, Metro Manila Philippines",
    dedicated: "2026, January, 18",
    area: 35998,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-65306-main.jpg",
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Metro Manila Philippines",
    dedicated: "1984, September, 25-27",
    area: 26683,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg",
  },
  {
    templeName: "Cebu Philippines",
    location: "Barangay Lahog, Cebu City Philippines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg",
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
];

// createTempleCard();

//

function createTempleCard(filteredTemples) {
  const gallery = document.querySelector(".grid-gallery");
  gallery.innerHTML = ""; // clear previous cards

  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">LOCATION:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">DEDICATED:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">AREA:</span> ${temple.area} sq ft`;
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";

    card.append(name, location, dedication, area, img);
    gallery.appendChild(card);
  });
}

function showAll() {
  createTempleCard(temples);
}

function showOld() {
  const filtered = temples.filter(
    (t) => parseInt(t.dedicated.split(",")[0]) < 2000
  );
  createTempleCard(filtered);
}

function showNew() {
  const filtered = temples.filter(
    (t) => parseInt(t.dedicated.split(",")[0]) >= 2000
  );
  createTempleCard(filtered);
}

function showLarge() {
  const filtered = temples.filter((t) => t.area > 50000);
  createTempleCard(filtered);
}

function showSmall() {
  const filtered = temples.filter((t) => t.area <= 50000);
  createTempleCard(filtered);
}

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks[0].addEventListener("click", (e) => {
  e.preventDefault();
  showAll();
});
navLinks[1].addEventListener("click", (e) => {
  e.preventDefault();
  showOld();
});
navLinks[2].addEventListener("click", (e) => {
  e.preventDefault();
  showNew();
});
navLinks[3].addEventListener("click", (e) => {
  e.preventDefault();
  showLarge();
});
navLinks[4].addEventListener("click", (e) => {
  e.preventDefault();
  showSmall();
});

showAll();
