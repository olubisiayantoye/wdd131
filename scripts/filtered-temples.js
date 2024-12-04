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


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Dallas Texas",
        location: "Texas, United States",
        dedicated: "1989, March, 5",   
        area: 44207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
      },

      {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 21" ,
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
      },

      {
        templeName: "Manaus Brazil",
        location: "Ponta, Negra",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
      }
  
  
    

    // Add more temple objects here...
  ];

// Function to render temple cards
function renderTemples(filterFn = () => true) {
    const container = document.getElementById("temple-container");
    container.innerHTML = ""; // Clear existing content
  
    const filteredTemples = temples.filter(filterFn);
  
    filteredTemples.forEach((temple) => {
      const card = document.createElement("figure");
      card.classList.add("temple-card");
  
      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        <img 
          src="${temple.imageUrl}" 
          alt="Image of ${temple.templeName}" 
          loading="lazy" 
        />
      `;
  
      container.appendChild(card);
    });
  }
  
  
  // Example filters
  const filters = {
    old: (temple) => new Date(temple.dedicated).getFullYear() < 1900,
    new: (temple) => new Date(temple.dedicated).getFullYear() > 2000,
    large: (temple) => temple.area > 90000,
    small: (temple) => temple.area < 10000,
  };
  
  // Event listeners for filtering
  document.getElementById("filter-old").addEventListener("click", () => renderTemples(filters.old));
  document.getElementById("filter-new").addEventListener("click", () => renderTemples(filters.new));
  document.getElementById("filter-large").addEventListener("click", () => renderTemples(filters.large));
  document.getElementById("filter-small").addEventListener("click", () => renderTemples(filters.small));
  document.getElementById("filter-home").addEventListener("click", () => renderTemples());
  
  // Initial render
  renderTemples();