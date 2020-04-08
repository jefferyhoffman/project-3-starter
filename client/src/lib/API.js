import axios from 'axios';

const dumbyData =[{id:'1', category:'Food', name:'Composting Food Waste', description:'Organic waste, that would otherwise be placed in the garbage, can be reduced by upwards of 80%.  This can reduce the average individuals amount of yearly waste by 277 pounds.', points:'50'},
{id:'2', category:'Travel', name:'Regularly Biking to Work/School', description:'More than 100 gallons of gasoline can be saved every year by the average commuter choosing to ride their bike to work.', points:'60'}
]

export default {
  Actions:{
    getSelected: function(userId){
      return dumbyData
      //API Call goes here
    },

    // this produces an array of action objects
    getAll: function(){
      return axios.get('/api/actions', {})
     }

  },
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

  Challenges: {

    // this produces an array with one challenge object
    // will not work until we use a authToken
    getCurrentChallenge: function(){
      return axios.get('/api/', {
        // headers: {
        //   'Authorization': `Bearer ${authToken}`
        // }
      })
    },

    // this produces an array with the last five challence objects
    // must be given a UserId
    // will also need the authToken
    getPastChallenges: function(UserId){
      return axios.get('/api/challenges/'+UserId, {
        // headers: {
        //   'Authorization': `Bearer ${authToken}`
        // }
      })
    },

    // Creates a Challenge
    createChallenge: function(points){
      return axios.post('/api/challenges', {})
    },

    // deletes and entire challenge
    deleteChallenge: function(id){
      return axios.delete('/api/challenges/deletechallenge/'+id, {})
    },

    // deletes actions from a challenge
    deleteActionFromChallenge: function(id){
      return axios.delete('/api/challenges/'+id, {})
    },

    // adds actions to a challenge by updating a challenge 
    updateChallenge: function(id, actions){
      return axios.put('/api/challenges/'+id, {
        actions: actions
      })
    },

    // updates a challenges totalPoints when passed an id and a new points total, would have to calc on front end for now
    updatePoints: function(id, totalPoints){
      return axios.put('/api/challenges/points/'+id, {
        totalPoints: totalPoints
      })
    }
  },
 
}
