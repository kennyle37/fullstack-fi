import React from 'react';

const StatisticContainer = ({ all, children }) => {
  if (!all) {
    return <div>No feedback given</div>
  }
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  )


}

export default StatisticContainer;
