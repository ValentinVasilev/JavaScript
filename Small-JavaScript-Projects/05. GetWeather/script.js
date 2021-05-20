//List with all citys
let availableCitys = [
  {
    name: "Montana",
    logtitued: "43.4085",
    latitued: "23.2257",
    pictureURL: "/05. GetWeather/root/pictures/Montana.jpg",
  },
  {
    name: "Sofia",
    logtitued: "42.6977",
    latitued: "23.3219",
    pictureURL: "/05. GetWeather/root/pictures/Sofia.jpg"
  },
  {
    name: "Varna",
    logtitued: "43.2141",
    latitued: "27.9147",
    pictureURL: "/05. GetWeather/root/pictures/Varna.jpg"
  },
];
const celsius = " °C";
const celsiusMaxIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16">
<path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"/>
<path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
</svg>`;
const celsiusMinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-low" viewBox="0 0 16 16">
<path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z"/>
<path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
</svg>`;
const currentTempratureIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-sun" viewBox="0 0 16 16">
<path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
<path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
</svg>`;
const sunriseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16">
<path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>`;
const sunsetIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunset-fill" viewBox="0 0 16 16">
<path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>`;
const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
<path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
</svg>`;
const windIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
<path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
</svg>`;
const directionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
<path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
<path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>`;

let getBtn = document.getElementById("getWeatherBtn");
let inputField = document.getElementById("inputField");
let cityCard = document.getElementById("cityCard");
let getCardImage = document.getElementsByClassName('card-img-top')[0];

let sunriseElement = document.getElementById('sunrise');
let sunsetElement = document.getElementById('sunset');

let humidityElement = document.getElementById('humidity');
let pressureElement = document.getElementById('pressure');
let risingElement = document.getElementById('rising');
let visibilityElement = document.getElementById('visibility');

let cityInfo;
getBtn.addEventListener("click", () => {
  
  getCity(inputField.value);
  let latitued = cityInfo.latitued;
  let logtitued = cityInfo.logtitued;
  let picture = cityInfo.pictureURL;

  getCardImage.src = picture;
  
  let imgElement = document.createElement('img');
  imgElement.classList.add('card-img-top');
  imgElement.src = picture;

  const stringURL = `https://yahoo-weather5.p.rapidapi.com/weather?lat=${logtitued}&long=${latitued}&format=json&u=f`;
  
  let convertFtoCLow = 0;
  let convertFtoCHigh = 0;
  let convertAverageTemprature = 0;

  fetch(
    stringURL,
    {
      method: "GET",
      headers: {
      
      },
    }
  )
    .then((response) => {
      let responseJSON = response.json();
      responseJSON.then((data) => {
        let observations = data.current_observation;
        let location = data.location;
        let foreCast = data.forecasts;

        foreCast.forEach((day) => {
          convertFtoCLow = ((day.low - 32) * 5) / 9;
          convertFtoCHigh = ((day.high - 32) * 5) / 9;
          convertAverageTemprature = ((observations.condition.temperature - 32) * 5) / 9;

          let maxTemperatureId = document.getElementById("max-temperature");
          maxTemperatureId.innerHTML = "Maximum Temperature: " + celsiusMaxIcon + convertFtoCHigh.toFixed(0) + celsius;
          

          let minTemperatureId = document.getElementById("min-temperature");
          minTemperatureId.innerHTML =  "Minimum Temperature: " + celsiusMinIcon + convertFtoCLow.toFixed(0) + celsius;
    
          let currentTemperature = document.getElementById('curentTemprature');
          currentTemperature.innerHTML = "Temprature now: " + currentTempratureIcon + convertAverageTemprature.toFixed(0) + celsius;
        });

        sunriseElement.innerHTML = sunriseIcon + "  Sunrise " + observations.astronomy.sunrise;
        sunsetElement.innerHTML = sunsetIcon + "  Sunset " + observations.astronomy.sunset;
        humidityElement.innerHTML = "Humidity " + arrowIcon + " " + observations.atmosphere.humidity; 
        pressureElement.innerHTML = "Pressure " + arrowIcon + " " + observations.atmosphere.pressure;
        risingElement.innerHTML = "Risinng " + arrowIcon + " " + observations.atmosphere.rising;
        visibilityElement.innerHTML = "Visibility " + arrowIcon + " " + observations.atmosphere.rising;

        //0: {day: "Sun", date: 1621134000, low: 55, high: 71, text: "Rain", …}
        console.log(observations);
        console.log(location);
        console.log(foreCast);
        console.log(observations.condition.temperature);
      });
    })

    .catch((err) => {
      console.error(err);
    });


  let card = document.getElementsByClassName("card-title")[0];

  cityCard.style.display = "inline";
  card.innerHTML = inputField.value;

  inputField.value = "";
});

function getCity(cityName) {

  for (let i = 0; i < availableCitys.length; i++) {

    if(!availableCitys.some(city => city.name === cityName)){

      console.log(`${cityName} is not a valid City!`);
      break;
    }

    if(availableCitys[i].name != cityName)
    {
      continue;
    }
    else if(availableCitys[i].name === cityName){
      return cityInfo = {
        latitued: availableCitys[i].latitued,
        logtitued: availableCitys[i].logtitued,
        pictureURL: availableCitys[i].pictureURL,
      }
    }
     
  }

  return console.log('Error');
}
