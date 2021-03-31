import express, { request, response } from 'express';

 import {getPosts,createPost} from '../controllers/post.js'
const postMessageCopy = import('../models/postMessage.js')
const route = express.Router();

//router.get('/Signup', getPosts);
route.post("/Signup", (req, res) => {
    const signeUpUser = new postMessageCopy({
FirstName:req.body.firstName,
LastName:req.body.LastName,
Email:req.body.Email,
password:req.body.password,
    })
    signeUpUser.save()
    .then(data =>{
        res.json(data)
    } )
    .catch(error=>{
        res.json(error)
    })
  });

export default route;
