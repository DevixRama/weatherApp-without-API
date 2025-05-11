let weatherData = {
  "Andhra Pradesh": { temp: 20, condition: "Rainy", humidity: 32, wind: 18, icon: "09d" },
  "Arunachal Pradesh": { temp: 25, condition: "Sunny", humidity: 43, wind: 9, icon: "01d" },
  "Assam": { temp: 21, condition: "Hot", humidity: 55, wind: 13, icon: "01d" },
  "Bihar": { temp: 20, condition: "Sunny", humidity: 45, wind: 14, icon: "01d" },
  "Chhattisgarh": { temp: 32, condition: "Humid", humidity: 62, wind: 19, icon: "04d" },
  "Goa": { temp: 31, condition: "Windy", humidity: 32, wind: 12, icon: "50d" },
  "Gujarat": { temp: 34, condition: "Cloudy", humidity: 87, wind: 5, icon: "03d" },
  "Haryana": { temp: 22, condition: "Clear", humidity: 74, wind: 5, icon: "01n" },
  "Himachal Pradesh": { temp: 34, condition: "Haze", humidity: 79, wind: 11, icon: "50d" },
  "Jharkhand": { temp: 20, condition: "Rainy", humidity: 30, wind: 18, icon: "09d" },
  "Karnataka": { temp: 39, condition: "Sunny", humidity: 56, wind: 8, icon: "01d" },
  "Kerala": { temp: 30, condition: "Haze", humidity: 73, wind: 14, icon: "50d" },
  "Madhya Pradesh": { temp: 31, condition: "Cloudy", humidity: 71, wind: 13, icon: "03d" },
  "Maharashtra": { temp: 34, condition: "Haze", humidity: 89, wind: 16, icon: "50d" },
  "Manipur": { temp: 30, condition: "Humid", humidity: 81, wind: 20, icon: "04d" },
  "Meghalaya": { temp: 27, condition: "Rainy", humidity: 42, wind: 6, icon: "09d" },
  "Mizoram": { temp: 24, condition: "Rainy", humidity: 54, wind: 5, icon: "09d" },
  "Nagaland": { temp: 39, condition: "Cloudy", humidity: 48, wind: 9, icon: "03d" },
  "Odisha": { temp: 22, condition: "Partly Cloudy", humidity: 36, wind: 14, icon: "02d" },
  "Punjab": { temp: 29, condition: "Humid", humidity: 69, wind: 7, icon: "04d" },
  "Rajasthan": { temp: 27, condition: "Cloudy", humidity: 73, wind: 18, icon: "03d" },
  "Sikkim": { temp: 30, condition: "Partly Cloudy", humidity: 67, wind: 13, icon: "02d" },
  "Tamil Nadu": { temp: 20, condition: "Sunny", humidity: 32, wind: 14, icon: "01d" },
  "Telangana": { temp: 25, condition: "Humid", humidity: 68, wind: 11, icon: "04d" },
  "Tripura": { temp: 26, condition: "Thunderstorm", humidity: 50, wind: 13, icon: "11d" },
  "Uttar Pradesh": { temp: 23, condition: "Cloudy", humidity: 75, wind: 18, icon: "03d" },
  "Uttarakhand": { temp: 23, condition: "Partly Cloudy", humidity: 85, wind: 9, icon: "02d" },
  "West Bengal": { temp: 20, condition: "Clear", humidity: 39, wind: 16, icon: "01n" },
  "Delhi": { temp: 33, condition: "Partly Cloudy", humidity: 85, wind: 14, icon: "02d" },
  "Mumbai": { temp: 25, condition: "Windy", humidity: 45, wind: 11, icon: "50d" },
  "Bangalore": { temp: 34, condition: "Hot", humidity: 82, wind: 5, icon: "01d" },
  "Hyderabad": { temp: 30, condition: "Cloudy", humidity: 86, wind: 18, icon: "03d" },
  "Chennai": { temp: 28, condition: "Rainy", humidity: 38, wind: 12, icon: "09d" },
  "Kolkata": { temp: 37, condition: "Humid", humidity: 61, wind: 18, icon: "04d" },
  "Pune": { temp: 34, condition: "Sunny", humidity: 43, wind: 5, icon: "01d" },
  "Ahmedabad": { temp: 37, condition: "Rainy", humidity: 31, wind: 7, icon: "09d" },
  "Jaipur": { temp: 27, condition: "Thunderstorm", humidity: 77, wind: 15, icon: "11d" },
  "Surat": { temp: 21, condition: "Sunny", humidity: 70, wind: 5, icon: "01d" },
  "Lucknow": { temp: 39, condition: "Clear", humidity: 53, wind: 13, icon: "01n" },
  "Kanpur": { temp: 38, condition: "Cloudy", humidity: 40, wind: 16, icon: "03d" },
  "Nagpur": { temp: 34, condition: "Partly Cloudy", humidity: 57, wind: 13, icon: "02d" },
  "Indore": { temp: 20, condition: "Partly Cloudy", humidity: 46, wind: 10, icon: "02d" },
  "Bhopal": { temp: 31, condition: "Sunny", humidity: 64, wind: 11, icon: "01d" },
  "Patna": { temp: 20, condition: "Thunderstorm", humidity: 74, wind: 10, icon: "11d" },
  "Ludhiana": { temp: 37, condition: "Hot", humidity: 69, wind: 16, icon: "01d" },
  "Agra": { temp: 29, condition: "Windy", humidity: 55, wind: 7, icon: "50d" },
  "Varanasi": { temp: 34, condition: "Sunny", humidity: 52, wind: 15, icon: "01d" },
  "Coimbatore": { temp: 27, condition: "Windy", humidity: 33, wind: 12, icon: "50d" }
};



let search = document.getElementById("search-btn")


search.addEventListener("click", () => {

  let inputValue = document.getElementById("city-input").value
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (weatherData[inputValue]) {
    displayWeather(inputValue)
    document.getElementById("city-input").value = ""
  } else {
    alert("data is not avilable, fetch india states or cities")
  }

})
console.log((weatherData["Andhra Pradesh"]));



function displayWeather(city) {
  const data = weatherData[city]

  document.getElementById("location").textContent = city
  document.getElementById("temperature").textContent = `${data.temp}°C`
  document.getElementById("condition").textContent = `Condition : ${data.condition}`
  document.getElementById("humidity").textContent = `humidity : ${data.humidity}`
  document.getElementById("wind").textContent = `wind : ${data.wind}`
  document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

}

displayWeather("Delhi")

