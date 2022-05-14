const apiKey = "0a8d4d6d2e89417ea3d2045c8dfd04bb";
let imperial = "&units=imperial";

// search form (to add event listener to later)
let searchedCityEl = document.querySelector("#searchedCityEl");

// to listen for click on search history buttons
let searchButton = document.querySelector("#searchButton")

// searchedCities is the data, searchHistory is the container it goes into 
let searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];
let searchHistory = document.querySelector("#searchHistory")

let searchedCity = document.querySelector("#searchedCity");

// how to handle form submit 
let formSubmit = function(event) {
    event.preventDefault();

    let city = searchedCity.value.trim();

    if (city !== null) {
        console.log(city);
        geoData(city);
    }
    // else {
    //     alert("That's not a valid city buddy, sorry :0( If you'd like to specify the state, you must also include the country (eg Moscow, ID does NOT work but Moscow, ID, USA does work)");
    // }

}

// Fetch geodata (lat, lon)
let geoData = function( city ) {
    // q = name of city
    // limit results (optional)
    // appid = your custom API key
    
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    // .THEN fetch one call data
    fetch(url) 
        .then(function(response){
            return response.json();
        })
    // .THEN render weather to page (pass thru data, what we returned from first step)
        .then(function(data) {
            console.log(data);
            let lat = data[0].lat;
            let lon = data[0].lon;
            getWeather(lat,lon);
        })
}

// Fetch one call weather data
let getWeather = function( lat, lon ) {
    // lat, lon
    // appid
    // units = imperial
    // exclude = minutely, hourly, alerts
    let city = searchedCity.value.trim();
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}${imperial}`;
    searchedCity.innerHTML= "";

// .THEN fetch one call data
    fetch(url) 
        .then(function(response){
            return response.json();
        })
        // .THEN render weather to page (pass thru data, what we returned from first step)
        .then(function(data) {
            console.log(data);

            // build url to get corresponding weather icon from openweather api
            let getIcon = function(iconCode) {
                let iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
                return iconURL;
            }
            let iconCurrent = getIcon(data.current.weather[0].icon);
            

            // render information to page 
            // grabs <div>s into which we will push our data
            let currentWeather = document.querySelector("#currentWeather");
            // name, emoji temp, wind, humidity, UV
            let fiveDayWeather = document.querySelector("#fiveDayWeather");
            // emoji, temp, wind, humidity 

            // clear five day weather container (otherwise old city data will remain)
            fiveDayWeather.innerHTML = "";

            let currentMoment = moment.unix(data.current.dt).format('MM/DD/YYYY');

            let uviStyling = "";

            // current weather uvi styling
            if (data.current.uvi <= 3) {
                // green
                uviStyling = "color:green"
            } else if (data.current.uvi <=5) {
                // yellow
                uviStyling = "color:yellow"
            } else {
                // red
                uviStyling = "color:red"
            }

            currentWeather.innerHTML = `
                <ul> 
                    <h1>Today: ${currentMoment} in ${city} </h1>
                    <img src='${iconCurrent}' alt='${data.current.weather[0].description}'/>
                    <li>${data.current.temp} F </li>
                    <li> feels like ${data.current.feels_like} F </li>
                    <li>${data.current.wind_speed} mph winds</li>
                    <li>${data.current.humidity}% humidity</li>
                    <li style="${uviStyling}">${data.current.uvi} UVI</li>
                </ul>`
            
                for ( let i=1; i<6; i++ ) {
                    let fiveDayMoment = moment.unix(data.daily[i].dt).format('MM/DD/YYYY');
                    let iconFiveDay = getIcon(data.daily[i].weather[0].icon);
                    // five day uvi styling
                    if (data.daily[i].uvi <= 3) {
                        // green
                        uviStyling = "color:green"
                    } else if (data.daily[i].uvi <=5) {
                        // yellow
                        uviStyling = "color:yellow"
                    } else {
                        // red
                        uviStyling = "color:red"
                    }

                    fiveDayWeather.innerHTML +=
                    `<div class="col-sm-2 col-md-2 border border-primary rounded m-1 p-2">
                        
                        <ul class="">
                            <p class="card-title "> ${fiveDayMoment} </p>
                            <img src='${iconFiveDay}' alt='${data.daily[i].weather[0].description}'/>
                            <li class="card-text">${data.daily[i].temp.night} F - ${data.daily[i].temp.day} F</li>
                            <li class="card-text">${data.daily[i].wind_speed} mph winds</li>
                            <li class="card-text">${data.daily[i].humidity}% humidity</li>
                            <li class="card-text"style="${uviStyling}">${data.daily[i].uvi} UVI</li>
                        </ul>
                    </div>
                    `
                }
            // console.log("this one:" + data.daily[2].temp.day);
            
            
        })
        // .then(function(histButt) {
        //     // render searchedCities into searchHistory (element) with data attr 
        //     for ( i=0; i<searchHistory.length; i++ ) {
        //         var histButt = document.createElement(`<button href="#" class="btn btn-primary" aria-current="false" id="city" data-name="${searchHistory[i]}">${searchedCity[i]}</button>`)
        //         searchHistory.append(histButt)
        //     }
        // })
}
// from <form> el, listen for "submit" 
// from <button> el, listen for "click"
// searchButton.addEventListener("click", getWeather)

    // select <input>, get its value, and provide it to the geo api


// from <button> CONTAINER element, listen for "click"
    // get the city from the button's data attr (when you print the buttons, print them with a data attr.)


// RESOURCES: 
// https://developer.mozilla.org/en-US/docs/Web/API/Response
// https://openweathermap.org/api/one-call-api
// https://getbootstrap.com/docs/4.0/getting-started/introduction/