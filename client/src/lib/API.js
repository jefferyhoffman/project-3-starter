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
    },
    retrieve: function (email, firstName, lastName, phone, address) {
      return axios.get('/api/users/register', { email, firstName, lastName, phone, address });
    }
  },

  Services: {
    checkout: function (date, services, id, cost, complete) {
      return axios.post("/api/checkout", { date, services, id, cost, complete });
    },
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
