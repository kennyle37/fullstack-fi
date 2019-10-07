import React from 'react';

const Statistic = ({ metric, score }) => {
  return (
    <div>
      {metric} {score}
    </div>
  )
}

export default Statistic;