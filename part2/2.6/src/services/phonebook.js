import axios from 'axios';
const baseUrl = 'http://localhost:3001/phonebook';

const getAll = () => {
  const request = axios.get(baseUrl)
  return (
    request
      .then(res => res.data)
      .catch(err => console.log(err))
  )
}
const createItem = ( payload ) => {
  const request = axios.post(baseUrl, payload)
  return (
    request
      .then(res => res.data)
      .catch(err => console.log(err))
  )
}

const updateItem = ( id, payload ) => axios.patch(`${baseUrl}/${id}`, payload)

const deleteItem = ( id ) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return (
    request
      .then(res => res)
      .catch(err => console.log(err))
  )
}


export default {
  getAll,
  createItem,
  updateItem,
  deleteItem
}
