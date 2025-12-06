const menuToggle = document.getElementById("menu-icon");
const navMenu = document.getElementById("navbar");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  icon.className = navMenu.classList.contains("show")
    ? "bx bx-x"
    : "bx bx-menu";
  menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("show"));
});

document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // swap placeholder with real image
        img.classList.add("fade-in"); // optional: add animation
        observer.unobserve(img); // stop observing once loaded
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});

// Array of services
const services = [
  { id: "custom-software", name: "Custom Software Development" },
  { id: "web-app", name: "Web Application Development" },
  { id: "mobile-app", name: "Mobile App Development" },
  { id: "api-design", name: "API Design & Development" },
  { id: "desktop-app", name: "Desktop Application Development" },
  { id: "automation-tools", name: "Automation Scripts/Tools" },
];

// Target the select element
const subjectSelect = document.getElementById("course-subject");

// Loop through array and create options
services.forEach((service) => {
  const option = document.createElement("option");
  option.value = service.id; // unique ID for form submission
  option.textContent = service.name; // visible text
  subjectSelect.appendChild(option);
});

// Footer dynamic year and last modified
function updateFooter() {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  yearSpan.textContent = new Date().getFullYear();
  modifiedSpan.textContent = `${document.lastModified}`;
}
updateFooter();
