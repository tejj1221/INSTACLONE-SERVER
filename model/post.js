const mongoose = require("mongoose");
const schema = mongoose.Schema
const objectId = schema.objectId;

const postschema = new schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    description:{type:String},
    image:{type:String, required:true},
    cloudinary_id: {type: String}

})

const Post = mongoose.model("Posts", postschema);

module.exports = Post;