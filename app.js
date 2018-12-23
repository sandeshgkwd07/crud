var express = require('express');
var path = require('path');
var PORT = 5000;
var app = express();
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', registerRouter);

app.get('/', function (req, res) {
    res.render(indexRouter);
});

// var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server on PORT : " + PORT);
});

