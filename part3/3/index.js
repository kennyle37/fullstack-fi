const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const personRoutes = require('./routes/persons');
const notesRoutes = require('./routes/notes');
const phonebookRoutes = require('./routes/phonebook');

app.use(express.static('build'))
app.use(bodyParser.json());
app.use('/persons', personRoutes);
app.use('/notes', notesRoutes)
app.use('/phonebook', phonebookRoutes)

morgan.token('body', (req) => JSON.stringify(req.body))
morgan.token('status', (res) => res.statusCode)

app.use(morgan(':method :url :status :response-time MS :body :status'))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is rnning on ${PORT}`)
})