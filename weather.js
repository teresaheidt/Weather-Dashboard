// city array
var cityArray = ['Chicago', 'New York', 'Orlando', 'San Francisco', 'Seattle', 'Denver', 'Atlanta',]

$(".city").on("click", function(event) {
    event.preventDefault();

// display the weather content
function displayWeatherInfo() {

var APIKey = 'd2edc2080024ef0841b4893641476d0a';     
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=d2edc2080024ef0841b4893641476d0a" + APIKey;     

// ajax call for the city being clicked
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
   console.log(response)

// TEMPERATURE (retrieve, element, set text, append)
   var temperature = $('<p>');
   temperatureEl.text('Temperature: ' + temperature);
   temperatureDiv.append(temperatureEl);
   console.log(temperature)
// HUMIDITY (retrieve, element, set text, append)
   var humidity = $('<p>');
   humidityEl.text('Humidity: ' + humidity);
   humidityDiv.append(humidityEl);
// WIND SPEED (retrieve, element, set text, append)
   var windSpeed = $('<p>');
   windSpeedEl.text('Wind Speed: ' + windSpeed);
   windSpeedDiv.append(windSpeedEl);
// UV INDEX (retrieve, element, set text, append)
   var uvIndex = $('<p>');
   uvIndexEl.text('UV Index: ' + uvIndex);
   uvIndexDiv.append(uvIndexEl);

});    

$(document).on("click", ".city", displayCityInfo);

});