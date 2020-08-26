/*ForecastData
extends from WeatherData
  time number -----dt*/
const currentWeather = require("./currentWeather");
class forecastWeather extends currentWeather {
  constructor(data) {
    super(data);
    this.time = data.dt;
  }
}

module.exports = forecastWeather;
