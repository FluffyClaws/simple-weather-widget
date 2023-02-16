let input = document.querySelector(".input_text");
let main = document.querySelector(".name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let humidity = document.querySelector(".humidity");
let windDeg = document.querySelector(".wind-deg");
let windSpd = document.querySelector(".wind-speed");
let pressure = document.querySelector(".pressure");
let button = document.querySelectorAll(".submit");
let locationIcon = document.querySelector(".weather-icon");

button.forEach((item) =>
  item.addEventListener("click", function (name) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input.value +
        "&units=metric&APPID=0da0940636dbc5f77079a84ddc063e38"
    )
      .then((response) => response.json())
      .then((data) => {
        let tempValue = data["main"]["temp"];
        let nameValue = data["name"];
        let descValue = data["weather"][0]["description"];
        let windDegValue = data["wind"]["deg"];
        let windSpdValue = data["wind"]["speed"];
        let pressureValue = data["main"]["pressure"];
        let humidityValue = data["main"]["humidity"];
        const icon = data.weather[0].icon;

        main.innerHTML = nameValue;
        desc.innerHTML = "Description - " + descValue;
        temp.innerHTML = "Temperature - " + tempValue + "°C";
        pressure.innerHTML = "Pressure - " + pressureValue + " hPa";
        humidity.innerHTML = "Humidity - " + humidityValue + "%";
        windDeg.innerHTML = "Wind direction - " + windDegValue + "°";
        windSpd.innerHTML = "Wind speed - " + windSpdValue + "km/h";
        locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
      })

      .catch((err) => alert("Wrong city name!"));
  })
);
