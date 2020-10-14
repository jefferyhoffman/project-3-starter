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

if (req.body.email &&
    req.body.password &&
    req.body.passwordConf) {

        var PatronData = {
            email: req.body.email,
            password: req.body.password,
        }

        Patron.create(Data, function (err,user) { 
            if (err) {
                return next (err)
            } else {
                return res.redirect('/home');
            }
        });
    }
      //hashing before saving

    patronSchema.pre('save', function (next) {
        var patron = this;
        bcrypt.hash(patron.password,15, function (err, hash) {
            if (err) {
                return next (err);
            }
            patron.password = hash;
            next();
        })
    });
