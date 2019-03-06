import axios from "axios";

export default {
  Users: {
    login: function(email, password) {
      return axios.post("/api/users/login", { email, password });
    },

    getMe: function(authToken) {
      return axios.get("/api/users/me", {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
    },
    register: function(email, password) {
      return axios.post("/api/users/register", { email, password });
    }
  },

  Secrets: {
    getAll: function(authToken) {
      return axios.get("/api/secrets", {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }
  },

  Trips: {
    tripResults: function() {
      return axios.get("/api/trips");
    }
  },

  Search:{
    searchResults: async function(location) {
      return axios.get("/api/trips/" + location);
    }
  }
};



