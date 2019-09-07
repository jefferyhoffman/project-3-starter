import axios from 'axios';

export default {
  // Gets all events
  findAll: function(type) {
    return axios.get('/api/' + type);
  },
  // Gets the event with the given id
  findOne: function(type, id) {
    return axios.get('/api/' + type + '/' + id);
  },
  // Deletes the event with the given id
  deleteOne: function(type, id) {
    return axios.delete('/api/' + type + '/' + id);
  },
  // Saves a event to the database
  createOne: function(type, newData) {
    console.log(newData);
    return axios.post('/api/' + type, newData);
  }
};
