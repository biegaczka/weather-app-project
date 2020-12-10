function formatedDate(timestamp) {
  let date = new Date(timestamp);
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `Today is ${day} - ${formatHours(timestamp)}h`;
}

function yearFollowUp(year) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month=months[year.getMonth()];
  
  let yearly = year.getFullYear();

  let today = year.getDate();
  return `${today} ${month} ${yearly}`;
}

function formatHours (timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
return `${hours}:${minutes}`;

}

function showTemperature(response) {
 let temperatureElement = document.querySelector("#temperature-element");
 let cityElement= document.querySelector("#city"); 
 let descriptionElement = document.querySelector("#description");
 celsiusTemperature=response.data.main.temp;
 let temperature = Math.round(celsiusTemperature);
 let humidityELement = document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
 let description = response.data.weather[0].description;
 let dateElement=document.querySelector("#date");
 dateElement.innerHTML=formatedDate(response.data.dt*1000);
 let iconElement=document.querySelector("#weather-icon");
 iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 iconElement.setAttribute("alt",`https://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png` )

 

 temperatureElement.innerHTML = `${temperature}`;
 cityElement.innerHTML=response.data.name;
 descriptionElement.innerHTML = `We have: ${description}`;
 humidityELement.innerHTML =`Humidity: ${response.data.main.humidity}%`;
 windElement.innerHTML=`Wind speed: ${Math.round(response.data.wind.speed)}(m/s)`;
}

function displayForecast (response){
let forecastElement=document.querySelector("#long-forecasting-three");
let forecastSixElement=document.querySelector("#long-forecasting-six");
let forecastNineElement=document.querySelector("#long-forecasting-nine");
let forecastTwelveElement=document.querySelector("#long-forecasting-twelve");
let forecastFifteenElement=document.querySelector("#long-forecasting-fifteen");
let forecastEighteenElement=document.querySelector("#long-forecasting-eighteen");
let forecast = response.data.list[0];
let forecastSix=response.data.list[1];
let forecastNine=response.data.list[2];
let forecastTwelve=response.data.list[3];
let forecastFifteen=response.data.list[4];
let forecastEighteen=response.data.list[5];

forecastElement.innerHTML=
`<div class="col-sm-2"><div class="week-day">${formatHours(forecast.dt*1000)}h</div></div>
    <div class="col-sm-2">
        <div class="icon">
          <img
          src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width=55
          />
        </div>
      </div>
    <div class="col-sm-6"><div class="temp"> <small>max</small> <strong> ${Math.round(forecast.main.temp_max)}°C </strong>| <small>min</small> ${Math.round(forecast.main.temp_min)}°C</div></div>
 </div>`;

 forecastSixElement.innerHTML=
 `<div class="col-sm-2"><div class="week-day">${formatHours(forecastSix.dt*1000)}h</div></div>
    <div class="col-sm-2">
        <div class="icon">
          <img
          src="https://openweathermap.org/img/wn/${forecastSix.weather[0].icon}@2x.png" width=55
          />
        </div>
      </div>
    <div class="col-sm-6"><div class="temp"> <small>max</small><strong> ${Math.round(forecastSix.main.temp_max)}°C </strong>| <small>min</small> ${Math.round(forecastSix.main.temp_min)}°C</div></div>
 </div>`;

forecastNineElement.innerHTML=
 `<div class="col-sm-2"><div class="week-day">${formatHours(forecastNine.dt*1000)}h</div></div>
    <div class="col-sm-2">
        <div class="icon">
          <img
          src="https://openweathermap.org/img/wn/${forecastNine.weather[0].icon}@2x.png" width=55
          />
        </div>
      </div>
    <div class="col-sm-6"><div class="temp"> <small>max</small> <strong> ${Math.round(forecastNine.main.temp_max)}°C </strong>| <small>min</small> ${Math.round(forecastNine.main.temp_min)}°C</div></div>
 </div>`;

 forecastTwelveElement.innerHTML=
 `<div class="col-sm-2"><div class="week-day">${formatHours(forecastTwelve.dt*1000)}h</div></div>
    <div class="col-sm-2">
        <div class="icon">
          <img
          src="https://openweathermap.org/img/wn/${forecastTwelve.weather[0].icon}@2x.png" width=55
          />
        </div>
      </div>
    <div class="col-sm-6"><div class="temp"> <small>max</small> <strong> ${Math.round(forecastTwelve.main.temp_max)}°C </strong>| <small>min</small> ${Math.round(forecastTwelve.main.temp_min)}°C</div></div>
 </div>`;

 forecastFifteenElement.innerHTML=
 `<div class="col-sm-2"><div class="week-day">${formatHours(forecastFifteen.dt*1000)}h</div></div>
    <div class="col-sm-2">
        <div class="icon">
          <img
          src="https://openweathermap.org/img/wn/${forecastFifteen.weather[0].icon}@2x.png" width=55
          />
        </div>
      </div>
    <div class="col-sm-6"><div class="temp"><small>max</small><strong> ${Math.round(forecastFifteen.main.temp_max)}°C </strong>| <small>min</small> ${Math.round(forecastFifteen.main.temp_min)}°C</div></div>
 </div>`;


}

function searchCity(city){
let apiKey = "06ca6b2e6fb5a01a965d59c5f70dc4cc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);

apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast)
}

function handleSubmit(event) {
event.preventDefault();
let city = document.querySelector("#city-input").value;
searchCity(city);
}

function searchLocation (position) {
let apiKey = "06ca6b2e6fb5a01a965d59c5f70dc4cc";
let units="metric";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);

let apiURLy = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
axios.get(apiURLy).then(displayForecast);
}

function localWeather (event) {
event.preventDefault();
navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event){
  event.preventDefault();
  let temperatureElement = document.querySelector ("#temperature-element");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature=(celsiusTemperature*9)/5+32;
  temperatureElement.innerHTML=Math.round(fahrenheitTemperature);
}

function convertToCelsius (event) {
  event.preventDefault();
  let temperatureElement = document.querySelector ("#temperature-element");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML=Math.round(celsiusTemperature);
}

let footer = document.querySelector("#date");
let date = new Date();
footer.innerHTML = formatedDate(date);

let section = document.querySelector("#yearUp");
let year = new Date();
section.innerHTML = yearFollowUp(year);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",handleSubmit);

let currentLocalization=document.querySelector("#my-localization");
currentLocalization.addEventListener("click", localWeather);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let celsiusTemperature= null;

searchCity("Bordeaux");