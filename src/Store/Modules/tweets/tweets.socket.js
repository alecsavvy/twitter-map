import openSocket from 'socket.io-client'
import { addTweet } from './tweets.actions'

// Start socket connection to server
const socket = openSocket('http://localhost:80/', { secure: true })

export default {
  start (dispatch) {
    // Dispatch action when connected to server
    socket.on('tweet', (tweet) => dispatch(addTweet(tweet)))
  }
}
