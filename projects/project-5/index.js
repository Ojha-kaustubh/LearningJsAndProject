

// Assuming 'input-box' is a class name used for multiple input boxes
let input = document.getElementsByClassName('input-box')[0]; // Assuming there's only one input box
let searchBox = document.getElementById('searchBtn');
let temperature = document.getElementById('temperature');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind-speed');
let weatherImg = document.getElementById('weather-img');

searchBox.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission
    let city = input.value.trim(); // Trim to remove any leading/trailing whitespace
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeather(city) {
    const API_KEY = "4cd0eee81294c867b4bc4cfc64e998c5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();

        temperature.textContent = `${data.main.temp} °C`;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} Km/H`;
        weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } catch (error) {
        console.log(error);
        alert('Error fetching weather data. Please try again.');
    }
}
