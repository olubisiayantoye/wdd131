// Set the current year and last modified date
let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy; ${d.getFullYear()}`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger button functionality
const hambutton = document.querySelector("#hambutton");
const navmenu = document.querySelector("#navmenu");

hambutton.addEventListener("click", () => {
  navmenu.classList.toggle("show"); // Toggle menu visibility
  hambutton.classList.toggle("show"); // Toggle button state
});
