import User from '../models/User.js'
import sendEmail from '../utils/sendEmail.js';
const register = async (req, res, next) =>{
    const {FirstName, LastName, Email, password} = req.body

    try{
        const user = await User.create({
            FirstName,
             LastName,
              Email,
               password 
        });
       sendToken(user, 201, res)
    }
    catch(error) {
        res.status(500).json({
            success:false,
            error: error.message,
        })
    }
};
const login = async (req, res, next) =>{
    const {Email, password} = req.body
   if (!Email || !password){
       res
       .status(400)
       .json({success: false, error: "Please provide email and password"});
   }
   try{
       const user =  await User.findOne({Email}).select("+password");
       if(!user){
           res.status(404).json({success: false , error: 'Invalid credentials'})
       }
       const isMatch = await user.matchPasswords(password);
       if(!isMatch){
           res.status(404).json({success:false, error:"Invalid credentiels"})
       }
       sendToken(user, 200, res)
   }catch(error){
    res.status(500).json({success:false, error:error.message})
   }
};
const forgotpassword = async (req, res, next) =>{
   const{Email} = req.body;
   try{
       const user = await User.findOne({Email});

       if(!user){
        res.status(404).json({success:false, error:"email could not be sent"})

       }
       const resetToken =  user.getResetPasswordToken();

       await user.save()

       const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
       const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;
       try{

        await sendEmail({
            to:user.Email,
            subject:"password Reset Request",
            text: message
        })
        res.status(200).json({success:true, data:"Email Sent"});
       }catch(error){
user.resetPasswordToken = undefined;
user.resetpasswordExpire = undefined;
await user.save();
res.status(500).json({success:false, data: "email not send"})
       }
   } catch (error){
next(error);
   }
};
const resetpassword = (req, res, next) =>{
    res.send("rresetpassword")
};

const sendToken = (user,statusCode, res)=>{
    const token = user.getSignedToken();
    res.status(statusCode).json({success:true, token})
};

export {register, login, forgotpassword,resetpassword};


    
 
