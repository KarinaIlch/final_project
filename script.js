const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

async function getLocation() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();
  const latitude = data.latitude;
  const longitude = data.longitude;
  const city = data.city;

  setTimeout(() => {
    getWeather(city, latitude, longitude);
  }, 1500);
}
async function getWeather(city, latitude, longitude) {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&current_weather=true"
  );
  const data = await res.json();
  loader.classList.toggle("none");
  const weatherCode = data.current_weather.weathercode;
  const temperature = data.current_weather.temperature;
  const windSpeed = data.current_weather.windspeed;
  const windDirection = data.current_weather.winddirection;
  console.log(city, weatherCode, temperature, windSpeed, windDirection);

  let code = "";

  switch (weatherCode) {
    case 0:
      code = "Clear sky";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/754419/pexels-photo-754419.jpeg')";
      break;
    case 1:
      code = "Mainly clear";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/5645/sky-clouds-blue.jpg')";
      break;
    case 2:
      code = "Partly cloudy";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/32703674/pexels-photo-32703674.jpeg')";
      break;
    case 3:
      code = "Overcast";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg')";
      document.body.style.color = "white";
      break;
    case 45:
      code = "Fog";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/978844/pexels-photo-978844.jpeg')";
      break;
    case 48:
      code = "Depositing rime fog";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/978844/pexels-photo-978844.jpeg')";
      break;
    case 51:
      code = "Drizzle: Light intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/2877038/pexels-photo-2877038.jpeg')";
      document.body.style.color = "white";
      break;
    case 53:
      code = "Drizzle: Moderate intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg')";
      document.body.style.color = "white";
      break;
    case 55:
      code = "Drizzle: Dense intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/14381698/pexels-photo-14381698.jpeg')";
      document.body.style.color = "white";
      break;
    case 56:
      code = "Freezing Drizzle: Light intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/3178798/pexels-photo-3178798.jpeg')";
      document.body.style.color = "white";
      break;
    case 57:
      code = "Freezing Drizzle: Dense intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/3178798/pexels-photo-3178798.jpeg')";
      document.body.style.color = "white";
      break;
    case 61:
      code = "Rain: Slight intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/3178798/pexels-photo-3178798.jpeg')";
      document.body.style.color = "white";
      break;
    case 63:
      code = "Rain: Moderate intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/950223/pexels-photo-950223.jpeg')";
      document.body.style.color = "white";
      break;
    case 65:
      code = "Rain: Heavy intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg')";
      document.body.style.color = "white";
      break;
    case 66:
      code = "Freezing Rain: Light intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg')";
      document.body.style.color = "white";
      break;
    case 67:
      code = "Freezing Rain: Heavy intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg')";
      document.body.style.color = "white";
      break;
    case 71:
      code = "Snow fall: Slight intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg')";
      break;
    case 73:
      code = "Snow fall: Moderate intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg')";
      break;
    case 75:
      code = "Snow fall: Heavy intensity";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg')";
      break;
    case 77:
      code = "Snow grains";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg')";
      break;
    case 80:
      code = "Rain showers: Slight";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg')";
      document.body.style.color = "white";
      break;
    case 81:
      code = "Rain showers: Moderate";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg')";
      document.body.style.color = "white";
      break;
    case 82:
      code = "Rain showers: Violent";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg')";
      document.body.style.color = "white";
      break;
    case 85:
      code = "Snow showers: Slight";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg')";
      break;
    case 86:
      code = "Snow showers: Heavy";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg')";
      break;
    case 95:
      code = "Thunderstorm: Slight or moderate";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg')";
      document.body.style.color = "white";
      break;
    case 96:
      code = "Thunderstorm with slight hail";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1294229/pexels-photo-1294229.jpeg')";
      document.body.style.color = "white";
      break;
    case 99:
      code = "Thunderstorm with heavy hail";
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg')";
      document.body.style.color = "white";
      break;
    default:
      code = "Unknown weather code";
      break;
  }
  const h2 = document.createElement("h2");
  h2.textContent = city;
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p.textContent = `Forecast: ${code} `;
  p1.textContent = `Temperature: ${temperature} C°`;
  p2.textContent = `Wind speed ${windSpeed} km/h `;
  p3.textContent = `Wind direction ${windDirection} °`;
  container.append(h2, p, p1, p2, p3);
  console.log(city, code, temperature, windSpeed, windDirection);
}

getLocation();
