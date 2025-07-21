const mongoose = require('mongoose');
const UserPostSchema = new mongoose.Schema({
    userid:{type:mongoose.Schema.ObjectId},
    title: {type : String , required : true},
    body : {type : String , required : true},
});
module.exports = mongoose.model("Post",UserPostSchema);