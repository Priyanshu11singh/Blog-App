

import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    blog: {type: mongoose.Schema.Types.ObjectId, ref: 'blog', required: true},
    name: {type: String, required: true},
    message: { type: String, required: true }, // 👈 replaced the duplicate "name"
     isApproved: { type: Boolean, default: false},    
},{timestamps: true});

//const Comment = mongoose.model('Comment', BlogSchema);

//export default Comment;
export default mongoose.model("Comment", commentSchema);
