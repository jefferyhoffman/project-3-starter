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
    getPastChallenges: function(){
      return axios.get('/api/', {
        // headers: {
        //   'Authorization': `Bearer ${authToken}`
        // }
      })
    },

    // ??
    create: function(points){
      return axios.post('/api/', {
        points
      })
    }
  },
 
}
