var axios = require('axios');

const API_KEY = '5a6ee7b8e441f17ef8ab35608f8eca3d';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

module.exports = {
   getTemp: function(location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
      return axios.get(requestUrl).then(function(response) {
         // debugger;
         if(response.data.cod && response.data.message) {
            throw new Error(response.data.message);
         } else {
            if (response.data.name.toLowerCase() == location.toLowerCase()) {
               return response.data.main.temp;
            } else {
               throw new Error('City not found');
            }
         }
       }, function(err) {
           throw new Error(err.response.data.message);
      });
   }
}
