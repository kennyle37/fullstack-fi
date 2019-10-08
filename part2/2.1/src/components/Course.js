import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ courses }) => {
  const courseList = courses.map(course => {
    const { id, name, parts } = course;
    return (
      <div key={id}>
        <Header title={name} />
        <Content name={parts.name} parts={parts} />
      </div>
    )
  }

  )
  return (
    <div>
      {courseList}
   </div>
  )
}

export default Course; 
