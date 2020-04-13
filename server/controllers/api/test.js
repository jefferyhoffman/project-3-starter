const allQueries = followers.map(follower => db.Challenge.findAll({
  where: {
    UserId: follower.dataValues.id
  },
  order: [['createdAt', 'DESC']],
  limit: 1
}));

Promise.all(allQueries)
  .then(allResults => {
    const queries = allResults.map(result => db.ChallengeAction.findAll({
      where: {
        ChallengeId: result[0].id,
        accomplished: 1
      }
    }));

    return Promise.all(queries);
  })
  .then(challengeActions => {
    return challengeActions.map(actions => actions.map(action => action.dataValues.ActionId))
  })
  .then(actionIdArrays => {
    console.log(actionIdArrays);
  })






  // let followerIdArray = followers.map(val => {
      //   return val.id;
      // })

      // const newArray = [];

      // followers.forEach(follower => {
      //   // console.log(follower.id + `****************`)
      //   // console.log(follower.dataValues.id + `************`)
      //   db.Challenge.findAll({
      //     where: {
      //       UserId: follower.dataValues.id
      //     },
      //     order: [['createdAt', 'DESC']],
      //     limit: 1
      //   })
      //   .then((val) => {
      //     if (!val) {
      //       return console.log(`****************** 1`)
      //     }
      //     db.ChallengeAction.findAll({
      //       where: {
      //         ChallengeId: val[0].id,
      //         accomplished: 1
      //       }
      //     })
      //     .then((data) => {
      //       if (!data) {
      //         return console.log(`****************** 2`)
      //       }
      //       return (data.map(val => {
      //         return val.dataValues.ActionId
      //       }));
      //     })
      //     .then((actionIdArray) => {
      //       if (!actionIdArray.length) {
      //         return console.log(`****************** 3`)
      //       }
      //       db.Action.findAll({
      //         where: {
      //           id: actionIdArray
      //         }
      //       })
      //       .then((actions) => {
      //         if (!actions) {
      //           return console.log(`****************** 4`)
      //         }
        
      //         let scoredPoints = actions.reduce((total, action) => total + action.points, 0)
      //         console.log(`********************** 5`)
      //         follower.dataValues.points = scoredPoints;
      //         console.log(follower.dataValues.points + `= follower.dataValues.points`);
      //         // console.log(follower);
      //         newArray.push(follower);
      //         console.log(`newArray:` + newArray[0]);
      //       })
      //       .catch((err) => console.log(err));
      //     })
      //     .catch((err) => console.log(err));
      //   })
      //     .catch((err) => console.log(err));
      // })
      
      // return followers.map(follower => {
      //   // console.log(follower.id + `****************`)
      //   // console.log(follower.dataValues.id + `************`)
      //   db.Challenge.findAll({
      //     where: {
      //       UserId: follower.dataValues.id
      //     },
      //     order: [['createdAt', 'DESC']],
      //     limit: 1
      //   })
      //   .then((val) => {
      //     if (!val) {
      //       return console.log(`****************** 1`)
      //     }
      //     db.ChallengeAction.findAll({
      //       where: {
      //         ChallengeId: val[0].id,
      //         accomplished: 1
      //       }
      //     })
      //     .then((data) => {
      //       if (!data) {
      //         return console.log(`****************** 2`)
      //       }
      //       return (data.map(val => {
      //         return val.dataValues.ActionId
      //       }));
      //     })
      //     .then((actionIdArray) => {
      //       if (!actionIdArray.length) {
      //         return console.log(`****************** 3`)
      //       }
      //       db.Action.findAll({
      //         where: {
      //           id: actionIdArray
      //         }
      //       })
      //       .then((actions) => {
      //         if (!actions) {
      //           return console.log(`****************** 4`)
      //         }
        
      //         let scoredPoints = actions.reduce((total, action) => total + action.points, 0)
      //         console.log(`********************** 5`)
      //         follower.dataValues.points = scoredPoints;
      //         // console.log(follower.dataValues.points + `= follower.dataValues.points`);
      //         // console.log(follower);
      //         // newArray.push(follower);
      //         // console.log(`newArray:` + newArray[0]);
      //         console.log(follower);
      //         return follower;
      //       })
      //       // .catch((err) => console.log(err));
      //     })
      //     // .catch((err) => console.log(err));
      //   })
      //     // .catch((err) => console.log(err));
      // })

      // console.log(`newArray: `+newArray)
      // console.log(followers)
      // res.json(newArray)
      // return newArray;