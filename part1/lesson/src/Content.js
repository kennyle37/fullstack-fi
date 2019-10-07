import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  const partsList = parts.map((part, index) => {
    const { title, exercises } = part;
    return <Part key={index} title={title} exercises={exercises} />
  })

  return (
    <div>
      {partsList} 
    </div>
  )
}

export default Content;
