import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

firstName:{
    type:String,
},
lastName:{
    type:String,
},
email:{
    type:String,
},
password:{
    type:String,
},
date:{
    type:Date,
    default:new Date()
}

})

const PostMessage =mongoose.model('PostMessage',postSchema);
export default PostMessage;
