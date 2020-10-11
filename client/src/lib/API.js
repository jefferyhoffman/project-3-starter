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

  Blog: {
    getAllBlogs: function () {
      return axios.get("/api/blogs", {})
    },
    getAllBlogsByUser: function (authToken) {
      return axios.get("/api/blogs/user", {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
    },
    getAllByCity: function (city) {
      return axios.get("/api/blogs/city/" + city, {})
    },
    //searching state by abrivation
    getAllByState: function (state) {
      return axios.get("/api/blogs/state/" + state, {})
    },
    create: (new_blog) => {
      return axios.post("/api/blogs", new_blog)
    },
    delete: function (blogId) {
      return axios.delete("/api/blogs", { _id: blogId })
    },
    update: function (blogId, text) {
      return axios.update("/api/blogs", { _id: blogId, blog: text })
    }
  }
}
