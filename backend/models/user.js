var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs')
const SALT_FACTOR = 10;

var schema = new Schema({
    email: { type: String, required: true },
    userName: { type: String, required: true },
    created: { type: Date, required: true },
    age: { type: Number, required: true },
    passwordHash: { type: String, required: true },

    //RELATIONSHIPS
    sessionId: { type: ObjectId, ref: "Session", required: true }
})

schema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) {
            return next(err);
        } else {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                next();
            });
        }
    });
});

schema.methods.validatePassword = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function(err, isMatch) {
            if (err || !isMatch) {
                return reject(err);
            }
            return resolve(isMatch);
        });
    })
};


module.exports = mongoose.model('User', schema);

module.exports = User;