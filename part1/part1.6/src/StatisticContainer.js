import React from 'react';

const StatisticContainer = ({ good, bad, neutral, children }) => {
  if (!good && !bad && !neutral) {
    return <div>No feedback given</div>
  }
  return <div>{children}</div>
}

export default StatisticContainer;
