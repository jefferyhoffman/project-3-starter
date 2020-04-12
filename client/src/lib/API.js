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
    // Jeff
    getMy: function (authToken) {
      return axios.get("/api/boards", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },

    createBoard: function (title, userId, columns, authToken) {
      return axios.post("/api/boards",
        {
          title,
          userId,
          columns,
        },
      );
    },
  },

  Columns: {
    updateColumnTitle: function (authToken, boardId, colId, title) {
      return axios.put(
        `/api/boards/${boardId}/columns/${colId}`,
        {
          title,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    updateColumnMoveCard: function (authToken, boardId, colIndex, newColIndex, cardIndex) {
      return axios.put(`/api/boards/${boardId}/columns/${colIndex}/${newColIndex}/cards/${cardIndex}`,
        {
          colIndex,
          newColIndex,
          cardIndex,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
    },
  },

  Cards: {
    // Jeff
    createCardInColumn: function (authToken, 
      boardId, colIndex, title, body) {
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

    updateCard: function (authToken,
       boardId, 
       colIndex, 
       cardIndex, title, body) {
      return axios.put(`/api/boards/${boardId}/columns/${colIndex}/cards/${cardIndex}`,
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

    deleteCardInColumn: function (authToken,
       boardId, colIndex, cardIndex) {
      return axios.delete(`/${boardId}/columns/${colIndex}/cards/${cardIndex}`,
        {
          cardIndex
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
