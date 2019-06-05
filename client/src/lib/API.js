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
    register: function (email, password, firstName, lastName, phone, address) {
      return axios.post('/api/users/register', { email, password, firstName, lastName, phone, address });
    }
  },

  Services:{
    addToCart: function (name, total, user) {
      return axios.post('./api/services/cart/' + user, {name, total});
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}
