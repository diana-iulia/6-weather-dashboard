// variables for:
    // api key = "0a8d4d6d2e89417ea3d2045c8dfd04bb";
    // (to push buttons into) searchHistoryEl = parse localstorage json data, get "searchedCities"
        // OR empty array if there is no json data 
        // render searchedCities into searchHistoryEl with data attr 
    // styling for fiveDayForecast
    
    // document.querySelector() for 
        // searchedCity 
        // searchButton 

        // currentWeather 
        // fiveDayWeather 

    // city = searchedCity.value.trim()

// build url to get corresaponding weather icon from openweather api


// Fetch geodata
     // .THEN fetch one call data
     // .THEN render weather to page 

// fetch geodata (lat, lon)

    // q = name of city

    // limit 5 (optional)

    // appid = your custom API key

// Fetch one call weather data

    // lat

    // lon

    // appid

    // units = imperial

    // exclude = minutely, hourly

// from <form> el, listen for "submit" 
// from <button> el, listen for "click"


    // select <input>, get its value, and provide it to the geo api


// from <button> CONTAINER element, listen for "click"
    // get the city from the button's data attr (when you print the buttons, print them with a data attr.)


// RESOURCES: 
// https://developer.mozilla.org/en-US/docs/Web/API/Response
// https://openweathermap.org/api/one-call-api