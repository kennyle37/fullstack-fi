const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// const personRoutes = require('./routes/persons');
// const notesRoutes = require('./routes/notes');
// const phonebookRoutes = require('./routes/phonebook');

// app.use(express.static('build'))
// app.use(bodyParser.json());
// app.use('/phonebooks', phonebookRoutes)
// app.use('/persons', personRoutes);
// app.use('/notes', notesRoutes)

app.get('/', (req, res) => {
  console.log('reached')
  res.send('hi')
})

// morgan.token('body', (req) => JSON.stringify(req.body))
// morgan.token('status', (res) => res.statusCode)

// app.use(morgan(':method :url :status :response-time MS :body :status'))

const PORT = process.env.SERVERPORT || 3001;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})