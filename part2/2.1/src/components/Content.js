import React from 'react';
import Parts from './Parts';

const Content = ({ parts }) => {
  const total = parts.reduce(((sum, part) => part.exercises + sum), 0);
  const items = parts.map(item => 
    <Parts key={item.id} name={item.name} exercises={item.exercises} />
  )

  return (
    <div>
      {items}
      <p><b>total of {total} exercises</b></p>
    </div>
  );
};

export default Content;