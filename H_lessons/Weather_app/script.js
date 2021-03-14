let formInput = document.querySelector("form");
let cityDisplay = document.querySelector(".city");
let container = document.querySelector(".container");

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".location");
container.style.visibility = "hidden";

let weather = {
    temperature: {
        value: 18,
        unit: "celsius"
    },
    description: "few clouds",
    iconId: "01d",
    city: "London",
    country: "GB"
};

const key = "7efe3ccb4ebe90fa60e758264e0bd042";
const kelvin = 273;

let getWeather = () => {
    event.preventDefault();
let city = document.querySelector("#city").value;
let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
fetch(api)
    .then(function(response){
    let data = response.json();
    console.log(data);
    return data;
})
    .then(function(data){
        container.style.visibility = "visible";
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    descElement.innerHTML = weather.description;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    console.log("function works");
}

formInput.addEventListener("submit", getWeather);