This rep is for heroku server
===

    WeatherData
    minCelsius number -----main.temp_min
    maxCelsius number -----main.temp_max
    minFahrenheit number ----------(main.temp_min × 9/5) + 32 = 32°F
    maxFahrenheit number
    humidity number -----main.humidity
    windSpeed number -----wind.speed
    windDirection string -----wind.deg

    ForecastData
    extends from WeatherData
    time number -----dt

    CityData
    name string -----name
    coord { ----- coord
    description:
    geo coordinates
    }
    country string
    country code -----sys.country

    population number
    population of the city


