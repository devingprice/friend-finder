var express = require("express");
var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();
var PORT = 3000;

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// app.get("/", function (req, res) {
//     res.send("Welcome to the Home Page!");
// });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
