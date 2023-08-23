const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; 
const searchButton = document.getElementById('search');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value;
    getWeather(cityName);
});

async function getWeather(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            weatherInfo.textContent = 'City not found';
        } else {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherInfo.textContent = `Temperature: ${temperature}°C, ${description}`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
