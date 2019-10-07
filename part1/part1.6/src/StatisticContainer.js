import React from 'react';

const StatisticContainer = ({ good, bad, neutral, children }) => {
  if (!good && !bad && !neutral) {
    return <div>No feedback given</div>
  }
  return (
    <table style={{'textAlign':'left'}}>
      <tbody>{children}</tbody>
    </table>
  )


}

export default StatisticContainer;
