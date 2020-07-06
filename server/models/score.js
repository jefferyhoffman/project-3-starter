const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({ 
    Score: [
        {
        currScore: {
            type: Number,
            required: false
          },
          highScore: {
              type: Number,
              required: false
          }
        }
    ]
},
// { toJSON: { virtuals: true } } 
);
// using virtual to work, to update the total duration, once a new workout is added
// WorkoutSchema.virtual("totalDuration").get(function(){
// // returning reduce
// return this.exercises.reduce((total, time) => {
//     // returning total + time.duration
//     return total + time.duration
// }, 0)
// })

const Score = mongoose.model("Score", ScoreSchema);
module.exports = Score;



  