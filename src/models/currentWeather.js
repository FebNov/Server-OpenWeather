/*minCelsius number -----main.temp_min
  maxCelsius number -----main.temp_max
  minFahrenheit number ----------(main.temp_min × 9/5) + 32 = 32°F
  maxFahrenheit number
  humidity number -----main.humidity
  windSpeed number -----wind.speed
  windDirection string -----wind.deg*/
class currentWeather {
  constructor(data) {
    this.minCelsius = data.main.temp_min;
    this.maxCelsius = data.main.temp_max;
    this.minFahrenheit = this.celsiusToFahrenheit(data.main.temp_min);
    this.maxFahrenheit = this.celsiusToFahrenheit(data.main.temp_max);
    this.humidity = data.main.humidity;
    this.windSpeed = data.wind.speed;
    this.windDirection = data.wind.deg;
  }
  //conver to Fahrenheit
  celsiusToFahrenheit(celsius) {
    const Fahrenheit = (celsius * 9) / 5 + 32;
    return Fahrenheit;
  }
}

module.exports = currentWeather;
