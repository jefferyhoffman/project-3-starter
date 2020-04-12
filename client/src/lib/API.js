import axios from "axios";

export default {
  Users: {
    login: async function (email, password) {
      return axios.post("/api/users/login", { email, password });
    },

    create: function (email, password) {
      return axios.post("/api/users", { email, password });
    },

    getMe: function (authToken) {
      return axios.get("/api/users/me", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get("/api/secrets", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },
  },

  Threads: {
    //gets all threads
    getThreads: function () {
      return axios.get("/api/thread");
    },
    //Gets thread with specific id
    getThread: function (id) {
      return axios.get("/api/thread/" + id);
    },
    // Creates a thread
    createThread: function (threadData) {
      return axios.post("/api/thread", threadData);
    },
  },
};
