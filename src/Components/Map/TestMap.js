import React from 'react'
import L from 'leaflet'

const mymap = L.map('mymap').setView([51.505, -0.09], 13);

const TestMap = () => (
  <div id="mymap">this is my map</div>
)
