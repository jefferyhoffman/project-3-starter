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

    addToCart: function (authToken, id){
      return axios.put('/api/users/me/cart', id, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    }
  },

  Products: {
    getAll: function () {
      return axios.get('/api/products');
    },
    getProduct: function (id){
      return axios.get('/api/products/' + id);
    },

    getCategories: function (category) {
      return axios.get('/api/products/category/'+ category);
    },

    getPopular: function (popular) {
      return axios.get('/api/products/'+ popular);
    },

    getGender: function (category, gender){
      return axios.get('/api/products/category/' + category + '/' + gender)
    }

  }
}
