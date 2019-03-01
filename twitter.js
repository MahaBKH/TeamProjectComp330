var Twit = require ('twit');
  var  T = new Twit({
    consumer_key: 'Ev7nLUb5erYzYaZd6754SbXDG',
    consumer_secret: '6Hs8GLptUYjeT86aJA49TtLzSbotarBEO3WkMX201olgDpaUTu',
    access_token: '1097522174326464512-P0Tzdwpong9efNuKZT9eFjm42r9x7F',
    access_token_secret: 'cTSYXbqHtrFYLclGlRrzBFDwq3zh1MZNU1H5itdKU9FOa'
});

function searchAPI(hashtag, user, url){
T.get('search/tweets', { q: 'Loyola since:2018-11-02', count: 5 }, function(err, data, response) {
    data.statuses.forEach(function(tweet){
        console.log("tweet:" + tweet.text)
    })
     console.log(data['text'])
  })
}

searchAPI('d','d','d')
//var loginBTN = document.getElementById('loginBTN').addEventListener('click', yourfunction);
