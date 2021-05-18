import { key, host } from "./config.file";

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

const maxTemperature = 0;
const minTemperature = 0;

let getBtn = document.getElementById("getWeatherBtn");
let inputField = document.getElementById("inputField");
let cityCard = document.getElementById("cityCard");
let getCardImage = document.getElementsByClassName('card-img-top')[0];

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


  fetch(
    stringURL,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
      },
    }
  )
    .then((response) => {
      let responseJSON = response.json();
      // console.log(responseJSON);
      responseJSON.then((data) => {
        let observations = data.current_observation;
        let location = data.location;
        let foreCast = data.forecasts;

        foreCast.forEach((day) => {
          convertFtoCLow = ((day.low - 32) * 5) / 9;
          convertFtoCHigh = ((day.high - 32) * 5) / 9;

          let maxTemperatureId = document.getElementById("max-temperature");
          maxTemperatureId.innerHTML = "Maximum Temperature: " + celsiusMaxIcon + convertFtoCHigh.toFixed(0) + celsius;
          

          let minTemperatureId = document.getElementById("min-temperature");
          minTemperatureId.innerHTML =  "Minimum Temperature: " + celsiusMinIcon + convertFtoCLow.toFixed(0) + celsius;
    
        });
        //0: {day: "Sun", date: 1621134000, low: 55, high: 71, text: "Rain", …}
        console.log(observations);
        console.log(location);
        console.log(foreCast);
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
