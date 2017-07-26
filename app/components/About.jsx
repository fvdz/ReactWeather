var React = require('react');

// stateless function component is preferred when only have a presentational
// component with a render function that does not do anything with state.
var About = () => {
   return (
      <div>
         <h3>About</h3>
         <p>Welcome to the about page.</p>
      </div>
   );
};

module.exports = About;
