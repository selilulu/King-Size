import express, { request, response, Router} from 'express';

const route = express.Router();
import {register, login, forgotpassword, resetpassword} from '../controllers/auth.js'
/*import bcrypt from 'bcrypt'
//router.get('/Signup', getPosts);
route.post("/Signup", async (request, response) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const signeUpUser = new postMessage({
FirstName:request.body.FirstName,
LastName:request.body.LastName,
Email:request.body.Email,
password:securePassword
    })
    signeUpUser.save()
    .then(data =>{
        response.json(data)
    } )
    .catch(error=>{
        response.json(error)
    })
  });*/
 


route.route("/Signup").post(register);
route.route("/login").post(login);
route.route("/forgotpassword").post(forgotpassword);
route.route("/resetpassword/:resetToken").post(resetpassword);

export default route;
