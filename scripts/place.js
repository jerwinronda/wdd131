const tempC = 10;
const windKmh = 5;

function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const windChillSpan = document.getElementById("windchill");
  if (tempC <= 10 && windKmh > 4.8) {
    windChillSpan.textContent = `${calculateWindChill(tempC, windKmh)}°C`;
  } else {
    windChillSpan.textContent = "N/A";
  }
}

function displayFooterDates() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

displayWindChill();
displayFooterDates();
