import axios from 'axios';
const baseUrl = 'http://localhost:3001/';

const getAll = () => {
  const request = axios.get(baseUrl)
  return (
    request
      .then(res => {
        // console.log('reached')
        // console.log(res)
        return res.data
      })
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

const updateItem = (id,payload) => {
  const request = axios.put(`${baseUrl}/${id}`, payload);
  return (
    request
      .then(res =>  res)
      .catch(err => console.log(err))
  )
}

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
