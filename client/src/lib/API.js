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

  },

  Services: {
    addToCart: function (name, total, user) {
      return axios.post('./api/services/cart/' + user, { name, total });
    },
    checkout: function (date, services) {
      return axios({
        method: "post",
        url: "/api/users/checkout",
        data: {
          services: services,
          date: date
          // authToken:authToken
        }
      })
    },

    buy: function (date, services) {
      return axios({
        method: "post",
        url: "/api/users/buy",
        data: {
          services: services,
          date: date
        }
      })
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
