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

  Affirmation: {
    getAffirmation: function (authToken) {
      return axios.get('/api/affirmation', {});
    }
  },

  Jokes: {
    getJokes: function (authToken) {
      return axios.get('/api/jokes', {});
    }
  },

  Sendgrid: {
    sendEmail: function (email) {
      return axios.post('/api/sendgrid', { email: email });
    }
  },

  Forum: {
    getForum: function () {
      return axios.get('/api/forum');
    }, 
    createForum: function (data) {
      return axios.post('/api/forum', data)
    }

  },
  Hospitals: {
    getClinics: function (query) {
      return axios.get('api/clinics', {});
    }
  }

}
