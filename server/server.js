const express = require('express')
const _ = require('lodash')
const NodeGeocoder = require('node-geocoder')
const io = require('socket.io')(80)
const Twitter = require('twitter')

const app = express()
const port = 8080

app.listen(port, () => console.log(`Twitter Map API listening on port ${port}!`))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Create new app on Google API to get keys.
const geocoder = NodeGeocoder({
  provider: 'google',
  apiKey: '', 
  formatter: null,
})

var tweetsList = []

// Create new app on Twitter API to get keys.
var twitter = new Twitter({ 
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
})

app.get('/', (req, res) => res.send('Welcome to the Twitter Map API!'))

app.get('/download', (req, res) => res.json(JSON.stringify(tweetsList)))

// Client hits www.api.com/tweets/:searchterm to search for tweets
app.get('/tweets/:term', (req, res) => {
  twitter.stream('statuses/filter', {track: req.params.term}, (stream) => {
    console.log(req.params.term)
    stream.on('data', (tweet) => { tweetHandler(tweet) })

    app.get('/close', (req, res) => {
      // Client hits www.api.com/close to close socket connection
      stream.destroy()
      tweetsList = []
    })
  
    stream.on('error',(error) => {
      console.log('ERROR ERROR ERROR')
      console.log(error)
    })
  })
})

const tweetHandler = (tweet) => {
    const location = _.get(tweet, 'user.location')
    if(location){
      geocoder.geocode(location, (err, res) => {
      if (res) {
        const response = res[0]
        if (response === undefined) { return }
        const coords = [response.latitude, response.longitude]
        tweet.geo = coords
        io.emit('tweet', tweet)
        tweetsList.push(tweet)
      }
      })
    }
}
