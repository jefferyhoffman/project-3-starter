import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/LoginPage', { email, password });
    },

    create: function (email, password) {
      return axios.post('/api/users', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
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
  },

  newCards: {
    create: function (name, company, email, website, phoneNum) {
      return axios.post('/api/studio', { name, company, email, website, phoneNum });
    },

    getCard: function (authToken) {
      return axios.get('/api/studio/myCard', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}
