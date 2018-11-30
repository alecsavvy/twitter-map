import React from 'react'
import InputForm from '../HomePage/InputForm'
import Tweets from './Tweets'

const RightPanel = () => (
  <div style={{ width: '20%', border: '2px solid #1DA1F2', borderRadius: '5px', padding: '5px', overflowY: 'scroll', color: '#AAB8C2' }}>
    Tweets
    <Tweets />
  </div>
)

export default RightPanel
