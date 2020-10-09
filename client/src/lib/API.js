import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
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
  Bills:{
    create: function(authToken, data){
      return axios.post('/api/bills',data, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      } )
    },
    getMe: function (authToken) {
      return axios.get('/api/bills', {
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
  }
}
