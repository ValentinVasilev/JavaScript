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

//SVG icons used from bootstrap icon website.
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
const windIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
<path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
</svg>`;
const directionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
<path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
<path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>`;
const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>`;

//Access to all elements
let getBtn = document.getElementById("getWeatherBtn");
let inputField = document.getElementById("inputField");
let cityCard = document.getElementById("cityCard");
let getCardImage = document.getElementsByClassName('card-img-top')[0];
let getCardTitle = document.getElementById('card-title');

let sunriseElement = document.getElementById('sunrise');
let sunsetElement = document.getElementById('sunset');

let humidityElement = document.getElementById('humidity');
let pressureElement = document.getElementById('pressure');
let risingElement = document.getElementById('rising');
let visibilityElement = document.getElementById('visibility');

let windElement = document.getElementById('wind');
let windTemperatureElement = document.getElementById('windTemperature');
let windDirectionElement = document.getElementById('direction');

let cityInfo;

//add Event to the get button
getBtn.addEventListener("click", () => {
 
  getCity(inputField.value);
  let latitued = cityInfo.latitued;
  let logtitued = cityInfo.logtitued;
  let picture = cityInfo.pictureURL;

  getCardImage.src = picture;
  
  let imgElement = document.createElement('img');
  imgElement.classList.add('card-img-top');
  imgElement.src = picture;

  //URl to search for the city coordinates.
  const stringURL = `https://yahoo-weather5.p.rapidapi.com/weather?lat=${logtitued}&long=${latitued}&format=json&u=f`;
  
  let convertFtoCLow = 0;
  let convertFtoCHigh = 0;
  let convertAverageTemperature = 0;
  let convertWindTemperature = 0;
  
  //fetch the weather data from Yahoo API
  fetch(
    stringURL,
    {
      method: "GET",
      headers: {
        
      },
    }
  )
  //Response from the fetch, with the all required data for the current city
    .then((response) => {
      let responseJSON = response.json();
      responseJSON.then((data) => {
        //the main objects from the response.
        let observations = data.current_observation;
        let location = data.location;
        let foreCast = data.forecasts;

        console.log(observations);
        console.log(location);
        console.log(foreCast);
        foreCast.forEach((day) => {
          //Convert temperature from the fetch, F to C
          convertFtoCLow = ((day.low - 32) * 5) / 9;
          convertFtoCHigh = ((day.high - 32) * 5) / 9;
          convertAverageTemperature = ((observations.condition.temperature - 32) * 5) / 9;
          convertWindTemperature = ((observations.wind.chill - 32) * 5)/  9;

          let maxTemperatureId = document.getElementById("max-temperature");
          maxTemperatureId.innerHTML = "Maximum Temperature: " + celsiusMaxIcon + convertFtoCHigh.toFixed(0) + celsius;
          

          let minTemperatureId = document.getElementById("min-temperature");
          minTemperatureId.innerHTML =  "Minimum Temperature: " + celsiusMinIcon + convertFtoCLow.toFixed(0) + celsius;
    
          let currentTemperature = document.getElementById('curentTemprature');
          currentTemperature.innerHTML = "Temprature now: " + currentTempratureIcon + convertAverageTemperature.toFixed(0) + celsius;
        });
        console.log(foreCast[0]);
        //Fill up the rest of the important data
        sunriseElement.innerHTML = sunriseIcon + "  Sunrise " + observations.astronomy.sunrise;
        sunsetElement.innerHTML = sunsetIcon + "  Sunset " + observations.astronomy.sunset;
        humidityElement.innerHTML = "Humidity " + arrowIcon + " " + observations.atmosphere.humidity + "%"; 
        pressureElement.innerHTML = "Pressure " + arrowIcon + " " + observations.atmosphere.pressure + " Pa";
        risingElement.innerHTML = "Risinng " + arrowIcon + " " + observations.atmosphere.rising;
        visibilityElement.innerHTML = "Visibility " + arrowIcon + " " + observations.atmosphere.visibility * 1.6 + " Km.";
        windTemperatureElement.innerHTML = windIcon + "Temperature " + convertWindTemperature.toFixed(0) + celsius;
        windDirectionElement.innerHTML = directionIcon + " WindDirection " + observations.wind.direction + "°";
        
       
        // getCardTitle.innerHTML = infoIcon;
        getCardTitle.addEventListener('click', () => {
              alert(`City: ${location.city}, County: ${location.country}
          Lat: ${location.lat}, Long: ${location.long}
          Region: ${location.region}, TimeZone: ${location.timezone_id}`);
        })
      
        let day1 = document.getElementById('day');
        let maxTemp = document.getElementById('maxTemp');
        let minTemp = document.getElementById('minTemp');
        let statusText = document.getElementById('statusText');
        let weatherStatus = document.getElementById('weatherStatus');
        let thunderIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cloud-lightning-rain-fill" viewBox="0 0 16 16">
        <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
      </svg>`;
     
        let day2 = document.getElementById('day2');
        let maxTemp2 = document.getElementById('maxTemp2');
        let minTemp2 = document.getElementById('minTemp2');
        let statusText2 = document.getElementById('statusText2');

        let day3 = document.getElementById('day3');
        let maxTemp3 = document.getElementById('maxTemp3');
        let minTemp3 = document.getElementById('minTemp3');
        let statusText3 = document.getElementById('statusText3');

        let day4 = document.getElementById('day4');
        let maxTemp4 = document.getElementById('maxTemp4');
        let minTemp4 = document.getElementById('minTemp4');
        let statusText4 = document.getElementById('statusText4');

        let day5 = document.getElementById('day5');
        let maxTemp5 = document.getElementById('maxTemp5');
        let minTemp5 = document.getElementById('minTemp5');
        let statusText5 = document.getElementById('statusText5');

        day1.innerHTML = foreCast[1].day;
        maxTemp.innerHTML = (((foreCast[1].high - 32) * 5) / 9).toFixed(0) + celsius;
        minTemp.innerHTML = (((foreCast[1].low - 32) * 5) / 9).toFixed(0) + celsius;
        statusText.innerHTML = foreCast[1].text;
        // if(foreCast[1].text == 'Thunderstorms'){
        //   weatherStatus.style.display = 'center';
        //   weatherStatus.innerHTML = thunderIcon;
        // }
  

        day2.innerHTML = foreCast[2].day;
        maxTemp2.innerHTML = (((foreCast[2].high - 32) * 5) / 9).toFixed(0) + celsius;
        minTemp2.innerHTML = (((foreCast[2].low - 32) * 5) / 9).toFixed(0) + celsius;
        statusText2.innerHTML = foreCast[2].text

        day3.innerHTML = foreCast[3].day;
        maxTemp3.innerHTML = (((foreCast[3].high - 32) * 5) / 9).toFixed(0) + celsius;
        minTemp3.innerHTML = (((foreCast[3].low - 32) * 5) / 9).toFixed(0) + celsius;
        statusText3.innerHTML = foreCast[3].text

        day4.innerHTML = foreCast[4].day;
        maxTemp4.innerHTML = (((foreCast[4].high - 32) * 5) / 9).toFixed(0) + celsius;
        minTemp4.innerHTML = (((foreCast[4].low - 32) * 5) / 9).toFixed(0) + celsius;
        statusText4.innerHTML = foreCast[4].text

        day5.innerHTML = foreCast[5].day;
        maxTemp5.innerHTML = (((foreCast[5].high - 32) * 5) / 9).toFixed(0) + celsius;
        minTemp5.innerHTML = (((foreCast[5].low - 32) * 5) / 9).toFixed(0) + celsius;
        statusText5.innerHTML = foreCast[5].text

        // for (let i = 0; i < 5; i++) {
        //   const day = array[i];
          
        // }
        //TODO: Create that one with a for loop.
      });
    })

    .catch((err) => {
      console.error(err);
    });


  let card = document.getElementsByClassName("card-title")[0];
  let moreInfo = document.getElementById('moreInfo');
  
  moreInfo.style.display = "inline";
  cityCard.style.display = "inline";
  card.innerHTML = infoIcon + " " + inputField.value;

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
