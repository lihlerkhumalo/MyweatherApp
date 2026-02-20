function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;

  
  searchCity(searchInputElement.value);
}

function updateWeather(response) {
    console.log(response.data)
  let temperatureElement = document.querySelector("#temperatureInfo");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current) + "°C";
}

function searchCity(city) {
  let apiKey = "de006o7c70fb22fbbf301edt429533ae";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", handleSearchSubmit);