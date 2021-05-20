
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
  let convertAverageTemprature = 0;

  fetch(
    stringURL,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c3945cbbd2mshd4ea8ca5946f3e9p1fdedejsn44e6943be2a6",
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
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
          convertAverageTemprature = ((observations.condition.temperature - 32) * 5) / 9;

          let maxTemperatureId = document.getElementById("max-temperature");
          maxTemperatureId.innerHTML = "Maximum Temperature: " + celsiusMaxIcon + convertFtoCHigh.toFixed(0) + celsius;
          

          let minTemperatureId = document.getElementById("min-temperature");
          minTemperatureId.innerHTML =  "Minimum Temperature: " + celsiusMinIcon + convertFtoCLow.toFixed(0) + celsius;
    
          let currentTemperature = document.getElementById('curentTemprature');
          currentTemperature.innerHTML = "Temprature now: " + currentTempratureIcon + convertAverageTemprature.toFixed(0) + celsius;
        });
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
