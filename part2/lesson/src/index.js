import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

import App from './components/App';

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only Javascript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
