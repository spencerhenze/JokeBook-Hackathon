var mongoose= require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    userName: {type: String, required: true},
    created: {type: Date, required: true},
    age: {type: Number, required: true},
    passwordHash: {type: String, required: true},

    //RELATIONSHIPS
    sessionId: {type: ObjectId, ref:"Session", required: true}
})

var User = mongoose.model("User", userSchema);

module.exports = User;

