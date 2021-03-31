import express, { request, response} from 'express';

 import {getPosts,createPost} from '../controllers/post.js'
const route = express.Router();
import postMessage from '../models/postMessage.js'
//router.get('/Signup', getPosts);
route.post("/Signup", (request, response) => {
    const signeUpUser = new postMessage({
FirstName:request.body.FirstName,
LastName:request.body.LastName,
Email:request.body.Email,
password:request.body.password
    })
    signeUpUser.save()
    .then(data =>{
        response.json(data)
    } )
    .catch(error=>{
        response.json(error)
    })
  });

export default route;
