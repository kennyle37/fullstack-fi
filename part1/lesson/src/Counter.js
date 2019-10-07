import React, { useState } from 'react';

import CounterDisplay from './CounterDisplay';
import Button from './Button';
import History from './History';

const Counter = (props) => {
  const [ counter, setCounter ] = useState(0);
  const [ direction, setDirection ] = useState({ left: 0, right: 0 });
  const [ allClicks, setAllClicks ] = useState([])
  const { left, right } = direction;

  const handleClick = (value) => () => setCounter(value)
  const handleLeft = (value) => () => {
    if (value) setAllClicks(allClicks.concat('L'))
    setDirection({ ...direction, left: value })
  }
  const handleRight = (value) => () => {
    if (value) setAllClicks(allClicks.concat('R')) 
    setDirection({ ...direction, right: value })
  }

  return (
    <div>
      <div>
      <CounterDisplay counter={counter}>This is my counter:</CounterDisplay>
        <Button handleClick={handleClick(counter+1)}>Increment</Button>
        <Button handleClick={handleClick(counter-1)}>Decrement</Button>
        <Button handleClick={handleClick(0)}>Reset</Button>
      <CounterDisplay counter={left}>Left:</CounterDisplay>
        <Button handleClick={handleLeft(left+1)}>Increment</Button>
        <Button handleClick={handleLeft(left-1)}>Decrement</Button>
        <Button handleClick={handleLeft(0)}>Reset</Button>
      <CounterDisplay counter={right}>Right:</CounterDisplay>
        <Button handleClick={handleRight(right+1)}>Increment</Button>
        <Button handleClick={handleRight(right-1)}>Decrement</Button>
        <Button handleClick={handleRight(0)}>Reset</Button>
      <History allClicks={allClicks.join('')} />
      </div>
    </div>
  )
}

export default Counter;