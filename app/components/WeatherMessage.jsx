var React = require('react');

var WeatherMessage = ({ temp, location }) => {
   return (
      <h3>In {location}, it is now {temp}&deg;F!</h3>
   );
}

module.exports = WeatherMessage;
