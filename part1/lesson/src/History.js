import React from 'react';

const History = ({ allClicks }) => {
  if (!allClicks.length) {
    return <div>Use this app by pressing the button</div>
  }
  return (
    <div>Button pressed: {allClicks}</div>
  )
}

export default History;
