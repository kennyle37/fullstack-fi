const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

console.log('connecting to url', url);

mongoose.connect(url, { useNewUrlParser: true })
  .then(res => {
    console.log('CONNECTED TO MONGODB')
  })
  .catch(err => {
    console.error('UNABLE TO CONNECT TO MONGODB')
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('personSchema', personSchema);