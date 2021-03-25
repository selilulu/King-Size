import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

fullName:{
    type:String,
    required:true
},
userName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:new Date()
}

})

const PostMessage =mongoose.model('PostMessage',postSchema);
export default PostMessage;
