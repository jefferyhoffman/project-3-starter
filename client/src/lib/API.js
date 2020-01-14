import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (firstName, lastName, email, password) {
      return axios.post('/api/users', { firstName, lastName, email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    getAll: function () {
      return axios.get('/api/users');
    },
    updateRole: function(authToken, user, role){
      return axios.put('/api/users', {user:user, role:role}, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    }
  },
  Contact: {
    send: function (info){
      return axios.post('/api/contact', info)
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

  Properties: {
    getAll: function(){
      return axios.get('/api/properties')
    },
    create: function( address, task, date){
      return axios.post("/api/properties", { address, task, date })
    }
  }
}
