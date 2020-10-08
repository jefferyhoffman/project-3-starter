const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: 'Email address is required'
    },
    location: {
        type: String,
        trim: true,
        required: 'A location is required',

    },
})

class newUser {
    constructor({ id, email, location }) {
        this.id = id;
        this.email = email;
        this.password = location;
    }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);


module.exports = User;