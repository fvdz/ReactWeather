var React = require('react');

// stateless function component is preferred when only have a presentational
// component with a render function that does not do anything with state.
var About = () => {
   return (
      <div>
         <h1 className="text-center page-title">About</h1>
         <p>
            This is a Weather Application build on React. I have build this for
            The Complete React Web App Developer Course
         </p>
         <p>
            Here are some of the tools I used:
         </p>
         <ul>
            <li>
               <a href="https://facebook.github.io/react">React</a> - This was
               the Javascript framework used.
            </li>
            <li>
               <a href="http://openweathermap.org">Open Weather Map</a> - I used
               Open Weather Map to search for weather data by city name.
            </li>
         </ul>
      </div>
   );
};

module.exports = About;
