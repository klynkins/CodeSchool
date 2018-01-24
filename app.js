var express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.send("Hello World");
});

app.get("/name", function(request, response) {
    response.send("Katelynn Campbell");
});

app.get("/surprise", function(request, response) {
    response.redirect(301, "/name");
});

app.listen(process.env.PORT, function() {
    console.log(process.env.IP);
    console.log(process.env.PORT);
});
