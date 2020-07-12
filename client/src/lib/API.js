import axios from 'axios';
import Leaderboard from '../pages/Leaderboard/Leaderboard';

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
  Characters: {
    getAllCharacters: function () {
      return axios.get('/api/characters');
    }
  },
  Scores:{
    getAll: function (){
      return axios.get('/api/leaderboard/')
    }
  },
  Leaderboard: {
    create: function ( username, highScore, lastGuess) {
      return axios.post('/api/leaderboard', {username, highScore, lastGuess});
    }
  }
}
