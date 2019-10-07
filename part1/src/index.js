import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header';
import Content from './Content';
import Total from './Total';
import Counter from './Counter'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exercises: 10,
      },
      {
        title: 'Using props to pass data',
        exercises: 7,
      },
      {
        title: 'State of a component',
        exercises: 14,
      }  
    ]
  }

  const { name, parts } = course;
  const total = parts.reduce((total, parts) => {
    return total + parts.exercises;
  }, 0);
  
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total total={total}/>
      <Counter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))