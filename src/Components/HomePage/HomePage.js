import React from 'react'
import LeftPanel from '../LeftPanel'
import RightPanel from '../RightPanel'
import Map from '../Map';

const HomePage = () => (
  <div style={{ display: 'flex',  height: '100vh', border: '3px', boxSizing: 'border-box', padding: '1%', backgroundColor: '#14171A' }}>
    <LeftPanel />
    <Map />
    {/* <RightPanel /> */}
  </div>
)

export default HomePage
