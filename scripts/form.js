
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    // Populate product options dynamically
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Track form submissions in localStorage
    const form = document.getElementById("review-form");
    form.addEventListener("submit", () => {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        localStorage.setItem("reviewCount", ++reviewCount);
        alert(`You have submitted ${reviewCount} reviews!`);
    });
});
