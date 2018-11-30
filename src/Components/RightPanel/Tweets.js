import React from 'react'
import { connect } from 'react-redux'
import { getTweets } from '../../Store/Modules/selectors'

const Tweet = ({
  tweet,
}) => {
  const profileImage = tweet.user.profile_image_url
  const username = tweet.user.name
  const location = tweet.user.location
  const text = tweet.text
  return (
  <div style={{ width: '100%', border: '1px solid blue', overflow: 'hidden' }}>
    <div>
      <img src={profileImage} alt={`${username}`} height="30" width="30" style={{ borderRadius: '50%'}}/>
      <div style={{ float: 'right' }}>{location}</div>
    </div>
    <div>{username}: {text}</div>
  </div>
)}

const Tweets = ({tweets}) => (
  <div>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet}/>
      })}
  </div>
)

const mapStateToProps = (state) => ({
  tweets: getTweets(state),
})

export default connect(mapStateToProps)(Tweets)
