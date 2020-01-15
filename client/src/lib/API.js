import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/LoginPage', { email, password });
    },

    create: function (email, password, name) {
      return axios.post('/api/users', { email, password, name });
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

  Newcardinfos: {
    create: function (authToken, newname, company, newemail, website, phonenumber) {
      return axios.post('/api/card/newcardinfos', { newname, company, newemail, website, phonenumber }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    getCards: function (authToken) {
      return axios.get('/api/card/mycards', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}
