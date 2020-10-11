import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password, first, last, address, city, state, zip, country, phone) {
      return axios.post('/api/users', { email, password, first, last, address, city, state, zip, country, phone });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  // first call we implemented to show all products on page
  Products: {
    getAllProducts: function () {
      return axios.get('/api/products')
    }
  },

  // order route to get an order from database

  Orders: {
    getAllOrders: function () {
      return axios.get('api/orders')
    },

    latestOrder: function () {
      return axios.get('api/orders/latest')
    },

    createOrder: function (products, authToken) {
      return axios.post('api/orders/processing', {
        products: products
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
    },

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
