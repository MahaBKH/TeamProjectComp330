var Twit = require ('twit');
  var  T = new Twit({
    consumer_key: 'Ev7nLUb5erYzYaZd6754SbXDG',
    consumer_secret: '6Hs8GLptUYjeT86aJA49TtLzSbotarBEO3WkMX201olgDpaUTu',
    access_token: '1097522174326464512-P0Tzdwpong9efNuKZT9eFjm42r9x7F',
    access_token_secret: 'cTSYXbqHtrFYLclGlRrzBFDwq3zh1MZNU1H5itdKU9FOa'
});
// get `trump` twitter users
T.get('users/suggestions/:slug', { slug: 'trump' }, function (err, data, response) {
    console.log(data)
  })

