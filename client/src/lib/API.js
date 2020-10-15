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

    addToCart: function (authToken, data){
      console.log(authToken)
      return axios.put('/api/users/me/cart', data, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    },

    removeCartItem: function (authToken, data){
      console.log(authToken)
      return axios.put('/api/users/me/cart/remove', data, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    }
  },

  Products: {
    getAllByGender: function (gender) {
      return axios.get('/api/products/all/' + gender);
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

    getCategoryGender: function (category, gender){
      return axios.get('/api/products/category/' + category + '/' + gender)
    },

  }
}
