import React from 'react'
import { connect } from 'react-redux'
import fs from 'fs'
import InputForm from '../HomePage/InputForm'
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import { getTweets } from '../../Store/Modules/selectors';

const LeftPanel = ({
  tweets,
  clearMap,
  filterRetweets,
  filterComments,
}) => (
  <div style={{ border: '2px solid #1DA1F2', borderRadius: '5px', width: '20%', padding: '5px', color: '#AAB8C2' }}>
    Search Term
    <InputForm />
    <div  style={{ paddingTop: '10%' }}>
      Filters
    </div>
    <div>
     <Checkbox onChange={filterRetweets} /> Retweets
    </div>
    <div>
     <Checkbox onChange={filterComments} /> Original Tweets
    </div>
    <button onClick={clearMap}>
        Clear Map
    </button>
    <button onClick={() => {
      fetch('http://localhost:8080/close')
      .then(response => response.json())
    }}>Stop Tweets</button>
    <a href="http://localhost:8080/download" target="_blank" rel="noopener noreferrer">Download</a>
    </div>
)

const mapStateToProps = (state) => ({
  tweets: getTweets(state),
})

const mapDispatchToProps = (dispatch) => ({
  clearMap: () => dispatch({type: 'CLEAR_MAP'}),
  filterRetweets: (payload) => dispatch({ type: 'FILTER_RETWEETS' , payload: payload.target.checked }),
  filterComments: (payload) => dispatch({ type: 'FILTER_COMMENTS', payload: payload.target.checked })
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel)
