// Get current count from localStorage (or start at 0)
let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
  reviewCount = 0;
}

// Increment count
reviewCount++;

// Save back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display count
document.getElementById(
  "counter"
).textContent = `You have submitted ${reviewCount} review(s).`;
