const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({ 
    username: {
        type: String
    },

    highScore: {
        type: Number,
        required: false
    },
    
    lastGuess: {
        type: String
    }
        
    
}
 
);


const Score = mongoose.model("Score", ScoreSchema);
module.exports = Score;



  