let temperatura = document.querySelector("#temperatura"); 
let tempDescription = document.querySelector("#tempDescription"); 
let Country = document.querySelector("#Country"); 
let Weekday = document.querySelector(".weekDay"); 
let wind = document.querySelector(".wind"); 
let body = document.querySelector("body"); 
 
const api = { 
  key: "3a7063b284370d7299850e6a392c8ad7", 
  baseurl: "https://api.openweathermap.org/data/2.5/", 
}; 
 
let city = "Tashkent"; 
let units = "metric"; 
let apiKey = api.key; 
 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`; 
fetch(apiUrl) 
.then(res => res.json()) 
.then(data => console.log(data)) 
 
function getResults() { 
  fetch(apiUrl) 
    .then((response) => { 
        return response.json() 
    }) 
    .then(displayResults()) 
    .finally("FETCH ISHLASHI BOSHLADI"); 
} 
 
 
function displayResults (weather) { 
    console.log(weather) 
    Country.innerHTML = weather.sys.country 
    // Weekday.innerHTML = weather.day 
    temperatura.innerHTML = weather.main.temp + "C" 
}