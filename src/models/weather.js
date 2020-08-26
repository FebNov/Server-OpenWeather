const axios = require("axios");
const city = require("./cityInfo");
const currentWeather = require("./currentWeather");
const forecastWeather = require("./forecastWeather");
const { request } = require("express");

//const routes = require("./routes");
//app.use(routes);
const unit = "metric";
const appid = "ada4e4cd17a1537327fe70dc3fd9a8f9";
//const reqCity = "Brisbane,au";

const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
});

function filterDataByClass(allInfo) {
  const rawData = allInfo[0].data;
  const cityInfo = new city(rawData);
  // console.log(cityInfo);
  const currentWeatherInfo = new currentWeather(rawData);
  //console.log(currentWeatherInfo);
  const rawForecastData = allInfo[1].data.list;
  //console.log(rawForecastData);
  const forecastWeatherInfo = rawForecastData.map(
    (i) => new forecastWeather(i)
  );
  //console.log(rawForecastData);
  // const forecastWeatherInfo = new forecastWeather(rawForecastData);
  // console.log(forecastWeatherInfo);
  return { cityInfo, currentWeatherInfo, forecastWeatherInfo };
}
function getCurrentWeather(cityName, countryCode) {
  const reqCity = `${cityName},${countryCode}`;
  return instance.get("/weather", {
    params: {
      q: reqCity,
      units: unit,
      APPID: appid,
    },
  });
}
function getForecastWeather(cityName, countryCode) {
  //api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={your api key}
  const reqCity = `${cityName},${countryCode}`;
  const cnt = 1;
  return instance.get("/forecast", {
    params: {
      q: reqCity,
      units: unit,
      cnt: cnt,
      APPID: appid,
    },
  });
}

function getInfoByCityName(cityName, countryCode) {
  return Promise.all([
    getCurrentWeather(cityName, countryCode),
    getForecastWeather(cityName, countryCode),
  ])
    .then((res) => {
      const finalInfo = filterDataByClass(res);
      //  const rawForecastDataList = res[1].data.list((listItem) => {
      //     new forecastWeather(rawForecastData);
      //    });
      //console.log(finalInfo);
      return finalInfo;
    })
    .catch((error) => {
      console.log(error);
    });
}
module.exports = { getInfoByCityName };
