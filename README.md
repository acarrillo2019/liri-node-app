# Liri-Node-App


## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and renders data.

- When user inputs command 'concert-this' and an artist's name, LIRI will return the artist's next concert information.

- When user inputs command 'spotify-this-song' and song name, LIRI will return basic information of the song.

- When user inputs command 'movie-this' and a movie's name, LIRI will return the movie's general information.

- When user inputs command 'do-what-it-says', LIRI will return the information pulled the random.txt file.


## How it works
LIRI uses Node.js and NPM packages: Axios, Node-Spotify-API package and FS Node package to query the Bands in Town Artist Events API, the Spotify API and the OMDB API to render search results.

If the user doesn't provide a specific song query, the default song search will output data for 'The Sign' from Ace of Base.
If the user doesn't type a movie in, LIRI will output data for the movie 'Mr. Nobody'.

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

LIRI logs all search queries into log.txt.
