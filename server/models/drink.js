const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    upvotes: {
        type: Number,
        required: true
    },
    downvotes: {
        type: Number,
        required: true
    },
    comments: {
        type: [],
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        trim: true,
        required: true
    },
    ingredientsAndMeasure: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    glass: {
        type: String,
        trim: true,
        required: true
    },
  
});

app.post('/new', function(req, res){
	new user({
		name: req.body.name,
		age   : req.body.age				
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.send('Successfully inserted!');
	});
});

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink;



// [
//     {
//         "id": "Drink id",
//         "name": "Drink Name",
//         "image": "Drink Image",
//         "type": "Drink Alcoholic/Non",
//         "category": "Drink Category",
//         "ingredients/Measure": "Drink ingredients/Measure",
//         "instructions": "Drink Instructions",
//         "glass": "Drink Glass"
//     },
// ]