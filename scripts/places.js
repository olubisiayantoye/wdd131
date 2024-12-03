// Calculate wind chill based on temperature and scale
function calculateWindChill(temperature, windSpeed, scale) {
    if (scale === "F") {
        return 35.74 + (0.6215 * temperature) 
               - (35.75 * Math.pow(windSpeed, 0.16)) 
               + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else if (scale === "C") {
        return 13.12 + (0.6215 * temperature) 
               - (11.37 * Math.pow(windSpeed, 0.16)) 
               + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        throw new Error("Invalid scale. Use 'F' for Fahrenheit or 'C' for Celsius.");
    }
}

// Input values
const temperatureCelsius = 10;
const windSpeed = 5;

// Element to display the wind chill
const windChillElement = document.getElementById("windchillf");

if (windChillElement) {
    // Compute and display the wind chill if conditions are met
    if (temperatureCelsius <= 10 && windSpeed > 4.8) {
        const windChillCelsius = calculateWindChill(temperatureCelsius, windSpeed, "C").toFixed(1);
        windChillElement.innerHTML = `${windChillCelsius} °C`;
    } else {
        windChillElement.innerHTML = "N/A";
    }
} else {
    console.error("Element with id 'windchillf' not found in the DOM.");
}



