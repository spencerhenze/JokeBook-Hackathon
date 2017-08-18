var mongoose= require("mongoose");
var ObjectId = mongoose.Schema.ObjectId;

var voteSchema = new mongoose.Schema({

    //RELATIONSHIPS
    postId: { type: ObjectId, ref:"Post", required:true }
})

var Vote = mongoose.model("Vote", voteSchema);

module.exports = Tag;
