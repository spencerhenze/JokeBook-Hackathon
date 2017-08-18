var mongoose= require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var tagSchema = new mongoose.Schema({
    tagName: {type: String, required: true},

    //RELATIONSHIPS
    postId: { type: ObjectId, ref:"Post", required:true }
})

var Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
