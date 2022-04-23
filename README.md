# 6-weather-dashboard
As a traveler, I want to see the weather outlook for multiple cities so that I can plan a trip accordingly


Pseudocode: 

[x] get api key
[x] create repo
[x] add index.html, style.css, script.js
[ ] HTML has: 
	[x] header "weather dashboard"
	[x] navigation bar: search box and most recent searches
	[x] results div for city name and date, temp, wind, humidity, uv index
	[x] results div for 5 day forecast, date, temp, wind, humidity
	[x] footer with credits
    [x] link bootstrap CDN 
    [x] link custom css
	
[ ] CSS has: 
	[ ] header - blue
	[ ] 5 day forecast boxes - navy 
	
[ ] JS has:
	[ ] localstorage for most recent searches 
	[ ] if, else :sunny: :umbrella: :cloud: :partly_sunny: :snowflake:
	[ ] variables for:
		[x] api key 
		[ ] searchedCityEl
		[ ] searchHistory - get history
		[ ] let history = JSON.parse(localStorage.getItem("search-history")) || [];
		
			[ ] if there is no search history, empty array
			[ ] if there is a search history, parse json 
		[ ] 
	function getWeather: 
		populates currentWeather with: 
			[ ] searched city name and date in heading
			[ ] temp, wind, humidity, UV index in li tags
			
		populates 5 day forecast div with: 
			[ ] 5 divs, each with date, emoji, temp, wind, and humidity
		
		[ ]Saves innerHTML of search to searchHistory array
