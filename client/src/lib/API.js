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

    register: function (name, email, password) {
      return axios.post('/api/users/register', { name, email, password })
    },
  },

  Items: {
    getItems: function () {
      return axios.get("/api/items");
    },

    getItem: function (id) {
      return axios.get("/api/items/" + id);
    },

    deleteItem: function (id) {
      return axios.delete("/api/items/" + id);
    },

    saveItem: function (itemData) {
      return axios.post("/api/items", itemData);
    }
  }
}
