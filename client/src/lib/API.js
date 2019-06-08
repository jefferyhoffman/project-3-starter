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
  BookUsers: {
    addToLibrary: (authToken, book) => axios.post('/api/bookUsers', { book }, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }),
    viewMyLibrary: (authToken) => {
      return axios.get('/api/bookUsers/myLibrary',
        {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
    },
    removeFromLibrary: (authToken, book) => axios.post('/api/bookUsers/removeFromLibrary', { book },
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
  },
  Books: {
    getBooks: () => axios.get('/api/books'),

    getBook: (search) => axios.post('/api/books/search', { search }),

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
