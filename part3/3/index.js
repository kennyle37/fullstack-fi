const express = require('express');
const app = express();

notes = [
  {
    name: "Arto Hellas",
    number: "123-456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "123-456",
    id: 2
  },
  {  
    name: "Dan Abramov",
    number: "123-456",
    id: 3
  },
  {  
    name: "Mary Poppendieck",
    number: "123-456",
    id: 3
  }
]

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

app.get('/persons', (req, res) => {
  res.json(notes);
})

app.get('/info', (req, res) => {
  const n = notes.length;
  const date = Date();
  res.send(`Phonebook has info for ${n} people. <br><br>${date}`)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})