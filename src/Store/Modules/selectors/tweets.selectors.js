import { filter, get } from 'lodash'

export const getTweets = (state) => state.tweets
export const getRetweets = (state) => filter(getTweets(state), (tweet) => { return get(tweet, 'retweeted_status')})
export const getOriginalTweets = (state) => filter(getTweets(state), (tweet) => { return !get(tweet, 'retweeted_status')})
