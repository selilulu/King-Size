import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

FirstName:{
    type:String,
},
LastName:{
    type:String,
},
Email:{
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

const PostMessage =mongoose.model('mytable',postSchema);
export default PostMessage;
