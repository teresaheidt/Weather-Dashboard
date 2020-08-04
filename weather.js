// city array
$(document).ready(function(){
var history = ['Chicago', 'New York', 'Orlando', 'San Francisco', 'Denver', 'Atlanta',];



for(var i = 0; i < history.length; i ++ ) {
   makeRow(history[i])
}

// add a new city to the group
function makeRow(text) {
   var li = $("<li>").addClass("list-group-item").text(text)

   $(".history").append(li)
}

// User can look for any city and the naame will display
$("#city-search").on("click", function() {
   var city = $("#add-city").val();
   console.log(city)
displayWeatherInfo(city)
}) 

// display the weather content
function displayWeatherInfo(city) {

   if(history.indexOf(city) === -1) {
   history.push(city);
   makeRow(history[i])

   }

var APIKey = 'd2edc2080024ef0841b4893641476d0a';  
// 5-Day forecast URL   
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`

// ajax call for the city being clicked
$.ajax({
    url: queryURL,
    method: 'GET',
    dataType: "json"
})

.then(function(response) {
   console.log(response)
   //  cityArray.text(JSON.stringify(response));
   $("#today").empty();

var card = $("<div>").addClass("card-city");
var cardBody = $("<div>").addClass("card-body");
var cardTitle = $("<h3>").addClass("card-title").text(response.name);
var temp = $("<h5>").addClass("card-text").text("Tempature: " + response.main.temp);
var wind = $("<h5>").addClass("card-text").text("Wind speed: " + response.wind.speed);
var humidity = $("<h5>").addClass("card-text").text("Humidity: " + response.main.humidity);

$("#today").append(card.append(cardBody.append(cardTitle, temp, wind, humidity)))

getforecast(response.coord.lat, response.coord.lon);

});    
}

function getforecast(lat, lon) {
   var APIKey = 'd2edc2080024ef0841b4893641476d0a';  
// 5-Day forecast URL   
var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`

// ajax call for the city being clicked
$.ajax({
    url: queryURL,
    method: 'GET',
    dataType: "json"
}).then(function(res){
 
   //for loop over res.daily.length
for (i=0; i<forecast.length; i++) {
   forecast[i].innerHTML = "";
   console.log(res)

   
}

   
})
}
})
