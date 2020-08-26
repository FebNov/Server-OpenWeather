/*CityData
  name string -----name
  coord { ----- coord
    description:
    geo coordinates
  }
  country string
  country code -----sys.country

  population number
  population of the city
*/
class city {
  constructor(data) {
    this.name = data.name;
    this.coord = data.coord;
    this.country = data.country;
    this.population = data.population;
  }
}

module.exports = city;
