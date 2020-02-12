// Required NPM

require("dotenv").config();
var keys = require("./keys.js");

// NPM module used to access Spotify API.
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var axios = require('axios');

// NPM module for moment
var moment = require('moment');

// NPM module used to read the random.txt file.
var fs = require('fs');


//Switch for ARGV commands
switch (process.argv[2]) {
    case "concert-this":
        bandsInTown();
        break;         
    case "spotify-this-song":
        getSong();
        break;
    case "movie-this":
        omdb();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;          
    };

// //Logs output to log.txt
// function logOutput(log,cmd){
//     // String to separate responses with liri command and timestamp
//     const logMsg = `------------------------------ ${cmd} ${moment().format("LLL")} ------------------------------\n${log}`;

//     // Log output to console
//     console.log(logMsg);

//     // Log output to log.txt
//     fs.appendFile(filename, logMsg, (err,d) => {
//         if (err){
//             console.log(err);
//         }
//     });
// }

//--------------Methods----------------


// ---Bands in Town ---

function bandsInTown() {
    var artist = process.argv.slice(3).join('+');
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(function(response){
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city);
        console.log(response.data[0].venue.country);
        var time = response.data[0].datetime;
        var timeFormat = moment(time).format("MM/DD/YYYY");
        console.log(timeFormat);
    
    }).catch(function(error){
        if (error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request){
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        };
        console.log(error.config);
    });
};


// ---Spotify get song---

function getSong(){
    var search = process.argv.slice(3).join(" ");
    if(!search){
        spotify.search({type: 'track', query: 'the sign ace of base'}, function(err,data){
            if(err){
                console.log('Error occured: ' + err);
                return;
            }
            console.log(data.tracks.items[19].name);
            console.log(data.tracks.items[19].artists[0].name);
            console.log(data.tracks.items[19].album.name);
            console.log(data.tracks.items[19].artists[0].href);
            return;
        });
    }else{

        spotify.search({type: 'track', query: search}, function(err,data){
            if(err){
                console.log('Error occurred: ' + err);
                return;
            }
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].album.name);
            console.log(data.tracks.items[0].artists[0].href);
            
        });
    };
};

// ---OMDB get movie---

function omdb(){
    // Default
    const defaultMovie = "Mr.Nobody";

    //Argv user input
    var movieName = process.argv.slice(3).join("+");

    //Log
    var logString = this.movieName;

    // Run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // Returns default movie
    if(!movieName && process.argv[2] === "movie-this"){
        var queryUrl = "http://www.omdbapi.com/?t=" + defaultMovie + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(function(response){
            console.log(`Name: ${response.data.Title}`);
            console.log(`Year: ${response.data.Year}`);
            console.log(`IMDB Rating: ${response.data.Ratings[0].Value}`);
            console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
            console.log(`Country Produced: ${response.data.Country}`);
            console.log(`Language: ${response.data.Language}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);
            logOutput(logString,"movie-this");
        }).catch(function(error){
            if (error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request){
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
        return;
    }else{ // Searches user input movie
        axios.get(queryUrl).then(function(response){
            console.log(`Name: ${response.data.Title}`);
            console.log(`Year: ${response.data.Year}`);
            console.log(`IMDB Rating: ${response.data.Ratings[0].Value}`);
            console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
            console.log(`Country Produced: ${response.data.Country}`);
            console.log(`Language: ${response.data.Language}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);
            logOutput(logString,"movie-this");
        }).catch(function(error){
            if (error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request){
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    };
};