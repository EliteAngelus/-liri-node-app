
// VARIABLE LINKING TO THE KEYS.JS FILE
var keys = require('./keys.js');
var request = require("request");
require("dotenv").config();
// VARIABLE STORING AND LINK TO FILE SYSTEMS
var fs = require('fs');

// VARIABLE TO STORE LIRI COMMAND
var liriArgument = process.argv[2];

var action = function(){
	if( liriArgument === "movie-this"){
		movie();
	}else if (liriArgument === "my-tweets") {
		twitterPull();
	}else if ( liriArgument === "spotify-this"){
        spotifyThis();
  }else if( liriArgument === "do-what-it-says"){
        random()
  }
}

var spotifyKeys = keys.access.spotify 

// REQUIRE VARIABLE FOR TWITTER AND SPOTIFY
var Spotify = require('node-spotify-api');


// ----------------------------------------------------

function twitterPull(){
// LINK TO THE KEYS ON THE KEYS.JS FILE.
var twitterKeys = keys.access.twitter
var Twitter = require('twitter'); 

// TWEETS!

var client = new Twitter({
  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret
});


var params = {screen_name: 'EliteAngelus'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  // if (error) throw error 
    
    for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);

    fs.appendFile("log.txt", "--" + tweets[i].text, function(error, data) {

		if(error){
			console.log(error);
		}

	});

    }	
  
	});
}

// -----------------------------------------------------
	
// MUSIC SEARCH!!

function spotifyObj(artist, song, link, album){
  this.Artist = artist,
  this.Song = song,
  this.Link = link,
  this.Album = album
}

function spotifyThis(song){
  var songIndex = 0;


  var spotify = new Spotify({
  id: spotifyKeys.id,
  secret: spotifyKeys.secret
});

  //Default song, if none is entered
  if (!song){
    // console.log(JSON.stringify(data, null, 2))
    // return;
    song = "Walk on Water",
    songIndex = 7;
  };

  var song = process.argv[2];

  spotify.search({ 
    type: 'track', 
    query: song}, 
  function(err, data) {
      if (err){
          console.log('Error occurred: ' + err);
          return;
      }

      //Grab only the first result
      var result = data.tracks.items[songIndex];

      //Grabs all artists 
    var artist = [];
    for (var i = 0; i < result.artists.length; i++){
      artist.push(result.artists[i].name);
    }
    artist = artist.join(", ");

    //Grabs song, link and album info
    var song = result.name;
    var link = result.preview_url;
    var album = result.album.name;

    //Stores everything in a new object, to be added to  log.txt
    var songObj = new spotifyObj(artist, song, link, album);

console.log(song);
    // printObj(songObj);
    // logIt(songObj);
  })
}

// ----------------------------------------------------------


// MOVIES THIS!!!!

function movie(){
// Grab or assemble the movie name and store it in a variable called "movieName"
var movie = process.argv[3];

fs.appendFile("log.txt", "--" + movie, function(error, data) {

		if(error){
			console.log(error);
		}

	});

if (movie === undefined) {
	var movie = "Mr. Nobody"
console.log("If you haven't watched Mr. Nobody," + "\nthen you should: http://www.imdb.com/title/tt0485947/" + "\n It's on Netflix" + "\n-----------");

}
// ...
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// Then create a request to the queryUrl
request( "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful
    if (!error && response.statusCode === 200) {

    	  console.log("Title: "+ JSON.parse(body).Title +"\nRating: " + JSON.parse(body).imdbRating + "\nYear: " + JSON.parse(body).Released + "\nCountry: " + JSON.parse(body).Country + "\nRuntime: " + JSON.parse(body).Runtime + "\nRotten Tomatoes Score: " +  JSON.parse(body).Ratings[1].Value  + "\nActors: " +JSON.parse(body).Actors + "\n----------" + "\nPlot: " + JSON.parse(body).Plot);
    	
  		}

	});

}





fs.readFile("random.txt", "utf8", function(err, data){


      if(err){
        return console.log(err)
      }

    var dataArray = data.split(',');


    var random = function (data,index,value){
      console.log(value);

     var rand = dataArray[Math.floor(Math.random() * dataArray.length)];


}
  });

action();

random();