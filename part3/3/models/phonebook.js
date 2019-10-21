const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;

console.log('CONNECTING TO URL ====>', url);

mongoose.connect(url, { useNewUrlParser: true })
  .then(res => {
    console.log('CONNECTION SUCCESSFUL!! :)')
  })
  .catch(err => {
    console.log('ERROR :( ==>', error.message)
  })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
})

const Phonebook = new mongoose.model('Phonebook', phonebookSchema)

// const entry = new Phonebook({
//   "name": "Arty",
//   "number": "123 45",
//   "date": new Date(),
// })

// entry.save().then(response => {
//   console.log('Arty saved!')
//   mongoose.connection.close()
// })

phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Phonebook', phonebookSchema);