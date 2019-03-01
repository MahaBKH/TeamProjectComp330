// import { searchAPI } from twitter.js
// require
import Twitter from 'twitter';

document.getElementById("clickable").addEventListener("click", getResults)

function getResults() {
    var user = document.getElementById("user").value;
    var hash = document.getElementById("hashtag").value;
    var www = document.getElementById("URL").value; 
   
	console.log(user);  
	console.log(hash);
    console.log(www);
   let val = searchAPI(user);
   alert(val)

}
// var Twit = require('twit');

var T = new Twitter({
    consumer_key: 'Ev7nLUb5erYzYaZd6754SbXDG',
    consumer_secret: '6Hs8GLptUYjeT86aJA49TtLzSbotarBEO3WkMX201olgDpaUTu',
    access_token: '1097522174326464512-P0Tzdwpong9efNuKZT9eFjm42r9x7F',
    access_token_secret: 'cTSYXbqHtrFYLclGlRrzBFDwq3zh1MZNU1H5itdKU9FOa'
});

function searchAPI(user){
    T.get('search/tweets', { q: user+ ' since:2018-11-02', count: 5 }, function(err, data, response) {
        data.statuses.forEach(function(tweet){
            console.log("tweet:" + tweet.text)
        })
         console.log(data['text'])
         return data['text']
      })
    
      
    }