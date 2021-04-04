import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto'; 
const userSchema = new mongoose.Schema({

FirstName:{
    type:String,
    required : [true, "Please provide a First Name"]
},
LastName:{
    type:String,
    required : [true, "Please provide a Last Name"]
},
Email:{
    type:String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
},
password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,

date:{
    type:Date,
    default:new Date()
}

});

userSchema.pre('save', async function(next){
    if (!this.isModified("password")){

        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next()
});
userSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.getSignedToken =  function(){
   return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
       expiresIn: process.env.JWT_EXPIRE
   })
}
userSchema.methods.getResetPasswordToken=  function(){
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto.
  createHash("sha256").
  update(resetToken).
  digest("hex");
this.resetPasswordExpire = Date.now() + (60*1000);
  return resetToken;
 }

const User =mongoose.model('User',userSchema);
export default User;
