const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({ 
    Character: [
        {
            picture: {
                type: String,
                required: true
            },
            name: {
                type: String,
                trim: true,
                require: true
            },
           hairColor: {
                type: String,
                trim: true,
                require: true
            },
            glasses: {
                type: Boolean,
                default: true,
                require: true,
            },
            facialHair: {
                type: Boolean,
                default: true,
                require: true,
            },  
            eyeColor: {
                type: String,
                trim: true,
                require: true
            },
            fact: {
                type: String,
                trim: true,
                require: true
            }
        }
    ], 
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

const Character = mongoose.model("Workout", CharacterSchema);
module.exports = Character;