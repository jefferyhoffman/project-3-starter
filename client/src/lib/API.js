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

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  // Challenges: {
  //   getCurrentChallenge: function(){
  //     return axios.get('/api/', {
  //       headers: {
  //         'Authorization': `Bearer ${authToken}`
  //       }
  //     })
  //   },

  //   getPastChallenges: function(){
  //     return axios.get('/api/', {
  //       headers: {
  //         'Authorization': `Bearer ${authToken}`
  //       }
  //     })
  //   },

  //   // ??
  //   create: function(points){
  //     return axios.post('/api/', {
  //       points
  //     })
  //   }
  // },

  // Actions: {
  //   getAll: function(){
  //     return axios.get('/api/', {
        
  //     })
  //   }
  // }  
}
