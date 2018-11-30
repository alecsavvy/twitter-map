# Twitter Map

![example map](https://pages.uoregon.edu/asavoy/GEOG_490/map.gif)

## Getting Started
- Clone the repo using `git clone https://github.com/alecsavvy/twitter-map.git`
- Gather a Twitter API key at https://apps.twitter.com/
- Gather a Google GeoCoder API key at https://developers.google.com/maps/documentation/geocoding/start
- Place the correct keys into the corresponding locations in `/server/server.js`
- Install Node.js here https://nodejs.org/en/download/
- If you have Brew install Yarn with `brew install yarn`, otherwise you can get it here https://yarnpkg.com/lang/en/docs/install/
- In terminal cd into the project directory and run `yarn install`
- To run the client cd into the project directory and run `yarn start`
- To run the server cd into `~/twitter-map/server/` and run `node server`
- Then navigate to `http://localhost:3000/` to see the map! 😎

## General
I decided to create a map of Twitter data because there is a lot of information and discourse flowing through that platform but not an easy way to tell where ideas are specifically coming from. This topic interested me because I wanted to see if specific opinions originated from specific locations. It's pretty easy as a human to assume that certain regions would have similar opinions but I wanted the data to speak for itself. This is particularily interesting when you get into topics like politics or science. Some users have a tendency to /blindly/ retweet while some leave comments. Also, neither of these options are mutually exclusive as in you can retweet as well as make a comment. I wanted to see if based on specific search terms, are more regions likely to /blindly/ retweet versus comment?

A map was the best way to view this data because it is the easiest method of consumption. Surely you could go on twitter and watch a live feed of the content but you do not see where this engagement is happening worldwide. That makes it more personal and allows you to draw conclusions you wouldn't be able to make in a less visual form of data consumption, i.e. a data table.

What geographic areas are covered?

The entire world is covered on the map because Twitter is /allowed/ to be used worldwide though there are some countries where the service is banned. There was some feedback for greying out countries where Twitter is banned just so the viewer knows not to expect data to show up there.

Describe your overall design aesthetic. What and why?

I chose a dashboard visual style with a dark basemap because this would ideally be a tool for data analysis. A dashboard would give the user the most control over their data and even have the possibility of downloading it for more complex analysis in programs like Qgis and Arcmap.

## Data Retrieval / Processing:

Retrieval:
The data is collected through the streams endpoint that twitter provides and currently is based around the filter parameter. https://developer.twitter.com/en/docs/tutorials/consuming-streaming-data.html

Eventually, I would like the project to accomade for all of the features that the stream endpoint provides for the highest ease of use. I used the filter parameter as a proof of concept.

Processing: Most tweets received do not have any geo-tagged coordinates much less a longitude/latitude so I had to pivot my design a little bit. This is mostly due to privacy concerns. Most users do have an account location though. When I figured that out the flow of data processing went such that if the user specified coordinates for the tweet use that, if not and they have an account location, use that, and if that's not there then I drop the tweet. 

The issue with the user profile location is they're mostly named placed, not coordinates. Ex. Eugene, Oregon. This is where the Google Geocoder API comes into play. When I receive a tweet and the server decides to use the user location, send the named location to the Geocoder API to get appropriate coordinates. Once I receive these I add it to the user's empty geolocation param and send it to the client through websocket. 

## Map(s) Design:

Describe your interaction choices. What and why?

The point of the map was to get the most information to the user as possible so I allowed each tweet to be clicked on and show the content of the actual tweet as well as providing multiple filters for the user to perform some analysis. They were also free to move about the map as they please because the density of some twitter streams gets very high.

I actually allowed all of the zoom levels because some tweet streams can get very dense and you can actually zoom in very far and still have a sizeable amount of data. The same is for zooming out. If you zoom in too far you may be missing a large portion of the interaction so the map should generally stay on a large scale with options to zoom in if need be.

Describe your base map choices. What and why?
 
 The dark theme is a personal preference as well as it's easier on the eyes. Ideally this could be changed on the client for personal preference.

Describe your data symbology choices. What and why?

I only got as far as implementing markers for each tweet but ideally these would be color coded with some form of sentiment analysis involved. Sentiment analysis would be an issue on twitter considering there is a LOT of sarcasm and that would be difficult to distinguish between an actual opinion.

Also, I would want a more density analysis based approach. The display gets very convoluted with large amounts of markers so having the markers sum up to a single circle containing the count of markers at various zoom levels would be the next step in symbology.

 UI/UX diagrams are in `~/twitter-map/mocks`.

Data Sources:
  - Tweets: developer.twitter.com
- Named Location Coordinates: developers.google.com

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


