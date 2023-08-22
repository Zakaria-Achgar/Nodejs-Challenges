const fetch = require('node-fetch');

const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
  { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

function selectRandomCity(cities) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

async function fetchTemperature(city) {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const temperature = data.current_weather.temperature_2m;

    return temperature;
  } catch (error) {
    console.error('Error fetching temperature:', error);
    return null;
  }
}

async function main() {
  const selectedCity = selectRandomCity(cities);
  console.log('Selected City:', selectedCity.name);

  const temperature = await fetchTemperature(selectedCity);

  if (temperature !== null) {
    console.log('Temperature:', temperature + '°C');
  } else {
    console.log('Failed to fetch temperature.');
  }
}

main();
