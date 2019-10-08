import React from 'react';

const Statistic = ({ metric, score }) => {
  return (
    <tr>
      <td>
        {metric}
      </td>
      <td>
        {score}
      </td>
    </tr>
  )
}

export default Statistic;