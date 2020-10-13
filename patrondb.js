var mongoose = require('mongoose'); 
var patronSchema = new mongoose.Schema({
email:{
    type: String, 
    unique: true, 
    required: true, 
    trim: true
}, 
password: {
    type: String,
    required: true,
}
}); 
var Patron = mongoose.model('Patron', patronSchema);
module.exports = Patron; 
