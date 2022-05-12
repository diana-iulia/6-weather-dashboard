// apiKey variable to 
const apiKey = "0a8d4d6d2e89417ea3d2045c8dfd04bb";
var imperial = "&units=imperial";

// searchHistory - check and see if anything is saved in localStorage under "searchHistory" OR an empty array if there is nothing in localStorage
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

var searchedCityEl = document.querySelector("#searchedCityEl");

var searchedCity = document.querySelector("#searchedCity");
var city = searchedCity.value.trim();

var searchButton = document.querySelector("#searchButton");

var currentWeather = document.querySelector("#currentWeather");
var fiveDayWeather = document.querySelector("#fiveDayWeather");

// builds URL to get corresponding icons from openweather
// function weatherIcon(iconCode) {
//     var icon = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
//     return icon;
// };

// render search history as buttons
// if (searchHistory !== null) {
//     for (i=0; i<searchHistory; i++) {

//     }
// }

// form submit function to...
function formSubmit(event) {
    event.preventDefault();

    // remove spaces and package into "city" var
    
    console.log(city);
    // if valid city,
    if (city) {
        // get lat+long of searched city
        getCoordinates(city);

        console.log(city);
        // push the city into the search history array
        searchHistory.push(city);
        // save searchHistory array in localStorage
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    } else {
        alert("That's not a valid city buddy, sorry :0( If you'd like to specify the state, you must also include the country (eg Moscow, ID does NOT work but Moscow, ID, USA does work)");
    }
}

// retrieves geolocation data of searched city 
function getCoordinates(searchedCity) {
    
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity.value + "&appid=" + apiKey + imperial;

    fetch(url) 
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function(data) {
                        getWeatherData = data;

                        // console.log(data);
                        var latitude = data.coord.lat;
                        var longitude = data.coord.lon;
                        // console.log(latitude + "and " + longitude);
                        getWeatherData(latitude,longitude);
                    })
                
            } else {
                alert("Err0r:" + response.statusText);
            }
        })
        .catch(function (error) {
            alert("No response received");
        })
};

// pass in latitude and longitude to getWeather (retrieves API response) 
function getWeather(latitude, longitude) {
    // oneCallUrl uses the latitude and longitude data from above to query openweather api
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=alerts,minutely,hourly&appid=" + apiKey;
    
    // empty var to fill later with uv index color 
    var uvi;
    var renderCurrentWeather = function(cityData) {
        // uv index color else if conditionals

        // build one-day forecast with template literal with temp, wind, humidity, UV
        // currentWeather = ``

        // currentWeather.innerHTML = currentWeather

    }

    var renderFiveDayWeather = function (cityData) {
        // emoji, temp, wind, humidity 
    }

    fetch(oneCallUrl) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data)
            renderCurrentWeather(data);
            renderFiveDayWeather(data);
        })
    }