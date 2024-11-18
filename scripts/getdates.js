document.addEventListener('DOMContentLoaded', () => {
    // Display the current year in the footer
    const yearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  
    // Update the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
    }
  });
  