import axios from "axios";

export default {
  Users: {
    login: function (email, password) {
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

  Boards: {
    getMy: function (authToken) {
      return axios.get("/api/boards", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },

    createCardInColumn: function (authToken, boardId, colIndex, title, body) {
      return axios.post(
        `/api/boards/${boardId}/columns/${colIndex}/cards`,
        {
          title,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },
  },

  Cards: {
    deleteCardInColumn: function (authToken, boardId, colIndex, cardId) {
      return axios.delete(`/${boardId}/columns/${colIndex}/cards/${cardId}`,{
        cardId
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
      );
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
};
