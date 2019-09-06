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
    },
    register: function (email, password) {
      return axios.post('/api/users/register', { email, password });
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
  Krystal: {
    send: function(data){
      return axios.post('/API/krystal/', data)
    },
    grab: function(){
      return axios.get('/API/krystal/viewcustomer/');
    },
    grabOne: function(id){
      console.log('-------------------------------------------')
      console.log(id)
      return axios.get(`/API/krystal/find/${id}`);
    }
  }
}
