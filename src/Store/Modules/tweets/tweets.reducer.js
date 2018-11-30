import { ADD_TWEET } from './tweets.actions'
import { filter, get } from 'lodash'

export const tweets = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TWEET:
      if (state.includes(payload)) { return state }
      const tweets =  [...state, payload]
      //if (tweets.length > 100) { return tweets.slice(tweets.length - 100, tweets.length)}
      return tweets.slice(tweets.length - 150, tweets.length)
    case 'FILTER_RETWEETS':
      if (payload) {
        return filter(state, (tweet) => { return get(tweet, 'retweeted_status')})
      } else { return state }
    case 'FILTER_COMMENTS':
      if (payload) {
        return filter(state, (tweet) => { return !get(tweet, 'retweeted_status')})
      } else { return state }
    case 'CLEAR_MAP':
      return []
    default:
      return state
  }
}
