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

背景颜色更改

<br>

当前温度

最高/最低

类型

城市信息

<br>

预测

日期 类型 最高/最低

<br>

风向风力

更多。。
