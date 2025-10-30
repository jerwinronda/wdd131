const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;

document.getElementById("lastModified").innerHTML =
  "Last Modified: " + document.lastModified;
