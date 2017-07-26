var express = require('express');

// create our App
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
   console.log('server is up and running on port 3000');
});
