const celsius = " °C";
const celsiusMaxIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16">
<path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"/>
<path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
</svg>`
const celsiusMinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-low" viewBox="0 0 16 16">
<path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z"/>
<path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
</svg>`;

const maxTemperature = 25;
const minTemperature = 10;

let getBtn = document.getElementById("getWeatherBtn");
getBtn.addEventListener("click", () => {
  let inputField = document.getElementById("inputField");
  let card = document.getElementsByClassName("card-title")[0];
  let cityCard = document.getElementById("cityCard");

  let maxTemperatureId = document.getElementById('max-temperature');
  maxTemperatureId.innerHTML = "Maximum Temperature: " + celsiusMaxIcon + maxTemperature + celsius;

  let minTemperatureId = document.getElementById('min-temperature');
  minTemperatureId.innerHTML = "Minimum Temperature: " + celsiusMinIcon + minTemperature + celsius;

  cityCard.style.display = "inline";
  card.innerHTML = inputField.value;
  inputField.value = "";
});
