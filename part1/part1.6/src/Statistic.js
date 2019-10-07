import React from 'react';

const Statistic = ({ metric, score }) => {
  return (
    <tr>
      <th>
        {metric}
      </th>
      <th>
        {score}
      </th>

    </tr>
  )
}

export default Statistic;