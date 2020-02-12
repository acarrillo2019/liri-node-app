// Required NPM

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var moment = require('moment');
var fs = require('fs');


//Switch for argv commands
switch (process.argv[2]) {
    case "concert-this":
            bandsintown();
            return;         
    case "spotify-this-song":
        spotifysearch();
        return;
    case "movie-this":
        omdb();
        return;
    case "do-what-it-says":
        doWhatItSays();
        return;          
    };