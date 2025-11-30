const API_KEY = '09713ff5bda72b953b883b92f9d000df'; // Your OpenWeatherMap API key
let isCelsius = true;

document.getElementById('searchButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) fetchWeatherData(location);
});

document.getElementById('toggleUnits').addEventListener('click', () => {
    isCelsius = !isCelsius;
    const location = document.getElementById('cityName').textContent;
    if (location) fetchWeatherData(location);
});

function fetchWeatherData(location) {
    const encodedLocation = encodeURIComponent(location); // Ensures the city name is URL encoded
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=${API_KEY}`)
        .then(response => {
            console.log('Response Status:', response.status);  // Log the status code
            if (!response.ok) { // If response status is not OK (e.g., 404 or 500)
                throw new Error('City not found!');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error.message); // Show the error message to the user
        });
}

function displayWeatherData(data) {
    const cityName = data.name;
    const tempK = data.main.temp;
    const temp = isCelsius ? kelvinToCelsius(tempK) : kelvinToFahrenheit(tempK);
    const description = data.weather[0].description;
    const sunrise = convertUnixToTime(data.sys.sunrise);
    const sunset = convertUnixToTime(data.sys.sunset);

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temp}°${isCelsius ? 'C' : 'F'}`;
    document.getElementById('description').textContent = `Weather: ${capitalize(description)}`;
    document.getElementById('clothingSuggestion').textContent = getClothingSuggestion(temp);
    document.getElementById('sunrise').textContent = sunrise;
    document.getElementById('sunset').textContent = sunset;
}

function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
}

function kelvinToFahrenheit(k) {
    return ((k - 273.15) * 9/5 + 32).toFixed(1);
}

function convertUnixToTime(unix) {
    const date = new Date(unix * 1000);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getClothingSuggestion(temp) {
    const tempC = isCelsius ? temp : (temp - 32) * 5/9;
    if (tempC < 10) return "Wear a heavy jacket.";
    if (tempC < 20) return "Wear a light jacket.";
    if (tempC < 30) return "A t-shirt should be fine.";
    return "Stay cool in shorts and a t-shirt.";
}
