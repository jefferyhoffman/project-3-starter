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
    }
  },
  Books: { 
    getBooks: () => axios.get('/api/books'),

    getBook: (search) => axios.get('/api/search', search),

    createBook: (bookData) => axios.post('/api/books/post', bookData),

    updateBook: (title) => axios.update('api/books/update', title),

    deleteBook: (id) => axios.delete('api/books/delete', id),

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
