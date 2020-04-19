import axios from "axios";

export default {
  Actions: {
    // this produces an array of action objects
    getAll: function () {
      return axios.get("/api/actions", {});
    },
  },
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

    inviteFriend: function (email) {
      return axios.post("/api/users/invite",{ email: email })
    },
    
    // retrieves an array of objects with all of the people a user follows
    getThoseIFollow: function (authToken) {
      return axios.get("/api/users/follows", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },

    // add to the people a user is following
    // must pass in the id of person they want to follow
    addToThoseIFollow: function (userFollowie, authToken) {
      return axios.post(
        "/api/users/follows",
        {
          userFollowie: userFollowie,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    // remove a userFollowie for a user
    // must pass in the id of person they want to unfollow
    removeFromThoseIFollow: function (userFollowie, authToken) {
      return axios.put(
        "/api/users/follows/delete",
        {
          userFollowie: userFollowie,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    // Search for a user by entering their email
    // returns an object
    searchForUser: function (email) {
      return axios.get("/api/users/search/" + email, {});
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

  Challenges: {
    // this produces an array with one challenge object
    // still needs some work on the back end so that assosiated actions are sent
    getCurrentChallenge: function (authToken) {
      return axios.get("/api/challenges", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },

    // this produces an array with the last five challence objects
    // not bringing in actions, just challenges
    // Workin
    getPastChallenges: function (UserId, authToken) {
      return axios.get("/api/challenges/" + UserId, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },

    // Creates a Challenge
    // working, don't have to pass in points
    createChallenge: function (authToken) {
      return axios.post(
        "/api/challenges",
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    // deletes and entire challenge
    deleteChallenge: function (id, authToken) {
      return axios.delete(
        "/api/challenges/deletechallenge/" + id,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    // deletes actions from a challenge
    deleteActionFromChallenge: function (id,actions, authToken) {
      console.log(id, actions)
      return axios.put(
        "/api/challenges/delete/" + id,
        {actions: actions},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    // adds actions to a challenge and updates the totalScore of said challenge
    // pass in both the id of challenge and the id of the action
    updateChallenge: function (id, actions, authToken) {
      return axios.put(
        "/api/challenges/" + id,
        {
          actions: actions,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    // This function Toggles an actions accomplished actribute both from true to false and false to true
    // returns an object with ChallengeAction data
    challengeActionAccomplishedToggle: function (
      ChallengeId,
      ActionId,
      authToken
    ) {
      return axios.put(
        "/api/challenges/challengeaction",
        {
          ChallengeId: ChallengeId,
          ActionId: ActionId,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    },

    // get current score of challenge based on actions accomplished
    // must pass ChallengeId and authToken
    // returns a number
    getCurrentScoreOfChallenge: function (ChallengeId, authToken) {
      return axios.get("/api/challenges/challengeaction/" + ChallengeId, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },

  },
};
