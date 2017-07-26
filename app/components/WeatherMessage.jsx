var React = require('react');

var WeatherMessage = ({ temp, location }) => {
   return (
      <h1 className="text-center">In {location}, it is now {temp}&deg;F!</h1>
   );
}

module.exports = WeatherMessage;
