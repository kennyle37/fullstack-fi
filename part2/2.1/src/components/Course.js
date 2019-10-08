import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ name, parts }) => {
  return (
    <div>
      <Header title={name} />
      <Content name={name} parts={parts} />
   </div>
  )
}

export default Course; 
