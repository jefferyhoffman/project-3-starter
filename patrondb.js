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
                return res.redirect('/index');
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
  //sessions to track logins 

app.use(session({
    secret:'hange',
    resave: true,
     saveUninitialized: false
})); 
patronSchema.statics.authenticate = function (email,password, callback) {
    patron.findOne ({email:email})
    .exec(function (err,user) {
        if (err) {
            return callback(err) 
        } else if (!user) {
            var err = new Error('User not found.');
            err.status = 401;
            return callback(err);
        }
        bcrypt.compare(password,patron.password,function (err, result)
        {
            if (result === true) {
                return callback(null, user);
            } else {
                return callback ();
            }
        })
    });
}
