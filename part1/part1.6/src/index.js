import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Button from './Button'
import Display from './Display'

const App = () => {
  const [ totalCount, setTotalCount ] = useState({good: 0, neutral: 0, bad: 0});
  const { good, neutral, bad } = totalCount;
  const all = good+bad+neutral;
  const average = (good + bad + neutral) > 0 ? (good + bad*-1) / (good + bad + neutral) : 0;
  const positive = (good + bad + neutral) > 0 ? (good / (good + bad + neutral)) * 100 : 0; 

  const handleGoodCount = (value) => () => {
    setTotalCount({
      ...totalCount,
      good: value,
    })
  }
  
  const handleNeutralCount = (value) => () => {
    setTotalCount({
      ...totalCount,
      neutral: value,
    })
  }

  const handleBadCount = (value) => () => {
    setTotalCount({
      ...totalCount,
      bad: value,
    })
  }

  return (
    <div>
      <Header title={'give feedback'} />
      <Button handleClick={handleGoodCount(good+1)}>Good</Button>
      <Button handleClick={handleNeutralCount(neutral+1)}>Neutral</Button>
      <Button handleClick={handleBadCount(bad+1)}>Bad</Button>
      <Header title={'statistics'} />
      <Display category={'good'} total={good}/>
      <Display category={'neutral'} total={neutral}/>
      <Display category={'bad'} total={bad}/>
      <Display category={'all'} total={all} />
      <Display category={'average'} total={average} />
      <Display category={'positive'} total={positive + ' %'} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))