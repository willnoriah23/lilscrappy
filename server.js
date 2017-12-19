// mongodb://heroku_bcwn3cjb:vt8falkglm7ktnh3poh0na43fs@ds159776.mlab.com:59776/heroku_bcwn3cjb

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var PORT = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/week18Populater", {
  useMongoClient: true
});

app.get("/scrape", function(req, res) {
  axios.get("http://www.theroot.com/").then(function(response) {
    var $ = cheerio.load(response.data);

    var response = [];
	
    $("article header h1").each(function(i, element) {
      var result = {};

      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

       console.log(result);

       response.push(result);    
    });

    	res.json(response)
  	});
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});