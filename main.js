let name_tag = document.getElementById('name');
let temp_tag = document.getElementById('temp');
let hum_tag = document.getElementById('hum');
let desc_tag = document.getElementById('description');
let wind_tag = document.getElementById('wind')

function getWeather(place) {
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid={APIKEYHERE}`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const name = data.name;
    const country = data.sys.country;
    const temp = Math.floor(data.main.temp) - 273;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const wind = Math.floor(data.wind.speed*3.6);
    name_tag.innerHTML = `${name}, ${country}`;
    temp_tag.innerHTML = `${temp}°C`;
    hum_tag.innerHTML = `${humidity}%`;
    desc_tag.innerHTML = `${description}`;
    wind_tag.innerHTML = `${wind} km/h`;
  })
  .catch((error) => {
      alert('ERROR!')
  });
}

function searchWeather() {
    const place = document.getElementById("search-bar").value;
    getWeather(place);
    document.getElementById('search-bar').value = '';
}
