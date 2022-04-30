let name_tag = document.getElementById('name');
let temp_tag = document.getElementById('temp');
let hum_tag = document.getElementById('hum');

function getWeather(place) {
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b549b607455b591a17e32c2bd49190a9`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const name = data.name;
    const temp = Math.floor(data.main.temp) - 273;
    const humidity = data.main.humidity;
    name_tag.innerHTML = `${name}`;
    temp_tag.innerHTML = `${temp}°C`;
    hum_tag.innerHTML = `${humidity}%`;
  })
  .catch((error) => {
      alert('ERROR!')
  });
}

function searchWeather() {
    const place = document.getElementById("search-bar").value;
    getWeather(place);
}
