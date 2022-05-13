const apiKey = "0a8d4d6d2e89417ea3d2045c8dfd04bb";
var imperial = "&units=imperial";

// search form (to add event listener to later)
var searchedCityEl = document.querySelector("#searchedCityEl");
// user input 
var searchedCity = document.querySelector("#searchedCity");
// do I need these (6,8) to be separate or can I combine them as `document.querySelector("#searchedCity").value.trim();` ?
var city = searchedCity.value.trim();

// to listen for click on search history buttons
var searchButton = document.querySelectorAll(".searchButton");

// grabs <div>s into which we will push our data
var currentWeather = document.querySelector("#currentWeather");
var fiveDayWeather = document.querySelector("#fiveDayWeather");

// searchedCities is the data, searchHistory is the container it(data) goes into 
var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];
var searchHistory = document.querySelector("#searchHistory")

// var styling for fiveDayForecast

// how to handle form submit 
var search = function(event, city) {
    event.preventDefault();
    
    if (city !== null) {
        // console.log(city);
        geoData(city);
        
        // render searchedCities into searchHistory (element) with data attr 
        for ( i=0; i<searchHistory.length; i++ ) {
            document.createElement(`<button href="#" class="btn btn-primary" aria-current="false" id="city" data-name="${searchedHistory[i]}">${searchedCity[i]}</button>`)
            
        }
    }

},

// build url to get corresponding weather icon from openweather api
var getIcon = function(iconCode) {
    var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2";
    return iconURL;
},

// Fetch geodata (lat, lon)
var geoData = function( city ) {
    // q = name of city
    // limit results (optional)
    // appid = your custom API key
    
    var url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    // .THEN fetch one call data
    fetch(url) 
        .then(function(response){
            return response.json();
        })
    // .THEN render weather to page (pass thru data, what we returned from first step)
        .then(function(data) {
            console.log(data);

            getWeather();
        })
}

// Fetch one call weather data
var getWeather = function( lat, lon ) {
    // lat, lon
    // appid
    // units = imperial
    // exclude = minutely, hourly
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`;
    searchedCity.innerHTML= "";

// .THEN fetch one call data
    fetch(url) 
        .then(function(response){
            return response.json();
        })
        // .THEN render weather to page (pass thru data, what we returned from first step)
        .then(function(data) {
            console.log(data);
            // render information to page 
        })
}
// from <form> el, listen for "submit" 
// from <button> el, listen for "click"


    // select <input>, get its value, and provide it to the geo api


// from <button> CONTAINER element, listen for "click"
    // get the city from the button's data attr (when you print the buttons, print them with a data attr.)


// RESOURCES: 
// https://developer.mozilla.org/en-US/docs/Web/API/Response
// https://openweathermap.org/api/one-call-api