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
    upload: function (theFile, authToken){
      console.log(authToken)
        const url = '/api/photos'
        const formData = new FormData()
        formData.append('file', theFile)
        const config = {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'content-type': 'multipart/form-data'
          }
        }
        return axios.post(url, formData, config)
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

  homeGallery:{
  allGalleries:function(){
    return axios.get('/api/usergallery')
  }
  }
}
