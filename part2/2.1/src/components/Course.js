import React from 'react';
import Header from './Header';
import Parts from './Parts';
import Content from './Content';

const Course = ({ name, parts }) => {
  const items = parts.map(item => 
    <Parts key={item.id} name={item.name} exercises={item.exercises} />
  )

  return (
    <div>
      <Header title={name} />
      <Content>
        {items}
      </Content>
   </div>
  )
}

export default Course; 
