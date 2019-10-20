const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit();
}

const password = process.argv[2];

const url = 
  `mongodb+srv://fullstack:${password}@cluster0-zdmcx.mongodb.net/phonebook-course?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
})

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  Person
    .find()
    .then(res => {
      console.log('Phonebook:')
      res.forEach(item => {
        console.log(item.name, item.number)
      })
      mongoose.connection.close();
    })
} else if (process.argv.length > 3) {
  const personName = process.argv[3];
  const personNumber = process.argv[4];
  
  const person = new Person({
    name: personName,
    number: personNumber,
    date: new Date(),
  })
  
  person
    .save()
    .then(res => {
    console.log('person saved!')
    mongoose.connection.close();
  })
}

