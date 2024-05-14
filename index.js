// WEATHER APP

const weatherForm = document.querySelector('.weatherForm')
const cityInput = document.querySelector('.cityInput')
const card = document.querySelector('.card')

const API_KEY = "62591b3ca9e259171315e2b9cb16ade3";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            console.log(weatherData)
            displayWeatherInfo(weatherData);

        } catch (error) {
            console.error(error)
            displayError(error)
        }
    }
    else {
        displayError("Please enter a city")
    }
})

async function getWeatherData(city) {
    
    try {
        const { lat, lon } = await getGeoData(city);
        // console.log(geo.lat, geo.lon)

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error("Could not fetch weather data")
        }
        // console.log(await response.json())
        return await response.json();

    } catch (error) {
        console.error(error);
        displayError(error);
        
    }



}

async function getGeoData(city) {
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;

    const response = await fetch(geoApiUrl);

    const allData = await response.json()
    console.log(allData.length)

    if (!allData.length > 0) {
        throw new Error("Could not fetch coordenates data");
    }
        
        
   
    //Open weather retorna um array de objetos, mas para simplificar, irei trabalhar apenas com o primeiro resultado

    return allData[0]

       
}
// data response
/**
 * {
    "coord": {
        "lon": -80.1936,
        "lat": 25.7742
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 26.53,
        "feels_like": 26.53,
        "temp_min": 24.44,
        "temp_max": 29.44,
        "pressure": 1019,
        "humidity": 61
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.09,
        "deg": 0
    },
    "clouds": {
        "all": 20
    },
    "dt": 1712957726,
    "sys": {
        "type": 2,
        "id": 2009435,
        "country": "US",
        "sunrise": 1712919603,
        "sunset": 1712965340
    },
    "timezone": -14400,
    "id": 4164138,
    "name": "Miami",
    "cod": 200
}
 */
function displayWeatherInfo(data) {
    // console.log(typeof data)

    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;
    
    card.textContent = "";
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")
    const weatherEmoji = document.createElement("p")

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`
    descDisplay.textContent = description
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"
            
        case (weatherId >= 300 && weatherId < 400):
            return "⛈️"
       
        case (weatherId >= 500 && weatherId < 600):
            return "⛈️"
        
        case (weatherId >= 600 && weatherId < 700):
            return "❄️"
        
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️"
        
        case (weatherId === 800):
            return "☀️"
        
        case (weatherId >= 801 && weatherId < 810):
            return "☁️"
        
        default:
            return "❔"
            
    }

}
function displayError(msg) {
    const errorDisplay = document.createElement("p");

    errorDisplay.textContent = msg;
    errorDisplay.classList.add("errorDisplay")

    card.textContent = ""
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}