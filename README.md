# liri-node-app

<h2>liri-node-app<h2>
Week 10 (LIRI Bot) Assignment

Created during Week 10 of Rutgers Coding Bootcamp. The challenge was to use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

my-tweets

spotify-this-song

movie-this

do-what-it-says

Getting Started
Clone down repo.
Run command 'npm install' in Terminal or GitBash
Run command 'node liri.js' or one of the commands below.
What Each Command Does
node liri.js my-tweets
Displays my last 20 tweets and when they were created in terminal/bash window.
node liri.js spotify-this-song <song name>
Shows the following information about the song in terminal/bash window.

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Or if no song is passed through, it will default to *"Florescent Adolescent" by Arctic Monkeys

node liri.js movie-this <movie name>
Shows the following information in terminal/bash.

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
Or if no movie is passed through, it will default to "Mr. Nobody"

node liri.js do-what-it-says
Takes the text from random.txt and runs the song through spotify-this-song command
Tech used
Node.js
Twitter NPM Package - https://www.npmjs.com/package/twitter
Spotify NPM Package - https://www.npmjs.com/package/spotify
Request NPM Package - https://www.npmjs.com/package/request
Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/
Built With
Sublime Text - Text Editor
<br>
Author
Jeffrey Francois - Node JS - Jeffrey Francois
