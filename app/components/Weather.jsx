var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
   getInitialState: function() {
      return {
         isLoading: false
      }
   },
   handleSearch: function(location) {
      var that = this;
      that.setState({ isLoading: true });
      openWeatherMap.getTemp(location).then(function(temp) {
         that.setState({
            location,
            temp,
            isLoading: false
         });
      }, function(err) {
         that.setState({ isLoading: false });
         alert(err);
      });
   },
   render: function() {

      var { isLoading, temp, location } = this.state;

      function renderMessage() {
         if(isLoading) {
            return <div>Loading...</div>;
         } else if(temp && location) {
            return <WeatherMessage temp={temp} location={location} />;
         }
      }

      return (
         <div>
            <h2>Get Weather</h2>
            <WeatherForm onSearch={this.handleSearch}/>
            { renderMessage() }
         </div>
      );
   }
});

module.exports = Weather;
