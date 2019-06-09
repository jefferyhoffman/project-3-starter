import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    register: function (email, password, name) {
      return axios.post('/api/users/register', { email, password, name })
    },
  },

  Items: {
    getItems: function () {
      return axios.get("/api/items");
    },
    // Gets the item with the given id
    getItem: function (id) {
      return axios.get("/api/items/" + id);
    },
    // Deletes the item with the given id, needs authentication
    deleteItem: function (id) {
      return axios.delete("/api/items/" + id);
    },
    // Saves a item to the database, needs authentication
    saveItem: function (itemData) {
      return axios.post("/api/items", itemData);
    }
  }
}
