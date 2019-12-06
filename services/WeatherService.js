import axios from 'axios'
const key = 'bf927a3a0e9aa574dae8ccc9fb22956c';
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

class WeatherService {

  getWeatherByCity(city = 'paris') {
    return axios.get(`${url}&q=${city}`);
  }
}

export default WeatherService;