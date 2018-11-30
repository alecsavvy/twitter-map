export const ADD_TWEET = 'ADD_TWEET'

export const addTweet = (tweet) => ({
  type: ADD_TWEET,
  payload: tweet,
})
