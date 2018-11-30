import React from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import {
  getTweets,
  getRetweets,
  getOriginalTweets,
} from '../../Store/Modules/selectors'


const App = ({
  tweets,
}) => {
    const position = [51.505, -0.09]
    return (
      <Map center={position} zoom={2} useFlyTo>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {tweets.map((tweet) => {
          const tweetLocation = tweet.geo
          return (
            <Marker position={tweetLocation} key={tweet.id} >
              <Popup>
                {tweet.text}
              </Popup>
            </Marker>
          )
        })}
      </Map>
    )
}

const mapStateToProps = (state) => ({
  tweets: getTweets(state),
})

export default connect(mapStateToProps)(App)
