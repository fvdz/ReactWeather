var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
   getInitialState: function() {
      return {
         isLoading: false
      }
   },
   handleSearch: function(location) {
      this.setState({
         isLoading: true,
         errorMessage: undefined,
         location: undefined,
         temp: undefined
      });
      openWeatherMap.getTemp(location).then( (temp) => {
         this.setState({
            location,
            temp,
            isLoading: false
         });
      }, (e) => {
         this.setState({
            isLoading: false,
            errorMessage: e.message
          });
      });
   },
   triggerSearch: function ( props ) {
      var location = props.location.query.location;

      if ( location && location.length > 0 ) {
         this.handleSearch(location);
         window.location.hash = '#/';
      }
   },
   componentDidMount: function() {
      this.triggerSearch( this.props );
   },
   componentWillReceiveProps: function (newProps) {
      this.triggerSearch( newProps );
   },
   render: function() {
      var { isLoading, temp, location, errorMessage } = this.state;

      function renderMessage() {
         if(isLoading) {
            return <h3 className="text-center">Fetching weather...</h3>;
         } else if(temp && location) {
            return <WeatherMessage temp={temp} location={location} />;
         }
      }

      function renderError() {
         if ( typeof errorMessage === 'string' ) {
            return (
               <ErrorModal message={errorMessage} />
            );
         }

      }

      return (
         <div>
            <h1 className="text-center page-title">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            { renderMessage() }
            { renderError() }
         </div>
      );
   }
});

module.exports = Weather;
