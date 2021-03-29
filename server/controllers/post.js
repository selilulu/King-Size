import PostMessage from '../models/postMessage.js';



export const getPosts =async (req, res) => {
    try{
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages);

    }catch(error){
        res.status(404).json({message:errormessage})
    }
    
 }

 export const createPost =async (req, res) => {
    try{
        const createUser = new PostMessage(req.body)
        await createUser.save()
        res.status(201).json(createUser);

    }catch(error){
        res.status(409).json({message:errormessage})
    }

    
 }

 


    
 