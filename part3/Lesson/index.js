const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const phonebookRoutes = require('./routes/phonebook');
const notesRoutes = require('./routes/notes');

app.use(express.static('build'))
app.use(bodyParser());
app.use(cors());

app.use('/phonebook', phonebookRoutes)
app.use('', notesRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
