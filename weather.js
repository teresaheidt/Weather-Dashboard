// city array
$(document).ready(function () {
   var history = ['Chicago', 'New York', 'Orlando', 'San Francisco', 'Denver', 'Atlanta',];

   // adding a click event to the city list
   $(document).on('click', ".city", function () {
      var showCity = $(this).text()

   // display weather when click on the button for the city
      displayWeatherInfo(showCity)
   })

   for (var i = 0; i < history.length; i++) {
      makeRow(history[i])
   }

   // add a new city to the group
   function makeRow(text) {
      var li = `<li class="city list-group-item">${text}</li>`

      $(".history").append(li)
   }

   $(".resetBtn").on("click", function(){
      event.preventDefault();
      localStorage.clear();
      getTasks();
      });

   // user can look for any city and the name will display
   $("#city-search").on("click", function () {
      var city = $("#add-city").val();
      console.log(city)
      displayWeatherInfo(city)
   })

   // display the weather content
   function displayWeatherInfo(city) {

      if (history.indexOf(city) === -1) {
         history.push(city);
         makeRow(history[i])
      }

      var APIKey = 'd2edc2080024ef0841b4893641476d0a';
      
      // daily forecast URL   
      var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`
      
      // ajax call for the city being clicked
      $.ajax({
         url: queryURL,
         method: 'GET',
         dataType: "json"
      })

         .then(function (response) {
            console.log(response)
        
            $("#today").empty();
           
            var card = $("<div>").addClass("card-city");
            var cardBody = $("<div>").addClass("card-body");
            var cardTitle = $("<h3>").addClass("card-title").text(response.name);
            var temp = $("<h4>").addClass("card-text").text("Tempature: " + response.main.temp);
            var wind = $("<h4>").addClass("card-text").text("Wind Speed: " + response.wind.speed);
            var humidity = $("<h4>").addClass("card-text").text("Humidity: " + response.main.humidity);
         
            $("#today").append(card.append(cardBody.append(cardTitle, temp, wind, humidity)))

            getforecast(response.coord.lat, response.coord.lon);

            //get UV Index
            var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=d2edc2080024ef0841b4893641476d0a&lat=" + response.coord.lat + "&lon=" + response.coord.lat;
               $.ajax({
               url: uvURL,
               method: "GET"
            }).then(function (uvresponse) {
            var uvindex = uvresponse.value;
            var color;
            if (uvindex <= 3) {
                color = "green";
            }
            else if (uvindex >= 3 || uvindex <= 6) {
                color = "yellow";
            }
            else if (uvindex >= 6 || uvindex <= 8) {
                color = "orange";
            }
            else {
                color = "red";
            }

            var uvdisp = $("<p>").attr("class", "card-text").text("UV Index: ");
            uvdisp.append($("<span>").attr("class", "uvindex").attr("style", ("background-color:" + color)).text(uvindex));
            cardBody.append(uvdisp);

        });

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
      }).then(function (res) {

         $("#forecast").empty();

      //for loop over res.daily.length
      for (i = 0; i < forecast.length; i++) {
         forecast[i].innerHTML = "";
         console.log(res)

         }


      })
   }
})
