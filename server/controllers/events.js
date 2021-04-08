import express from 'express';
import Event from '../models/eventsModel.js'

const router = express.Router();

export const events= async (req, res) => {


    //res.send({response: "This is participants API." }).status(200);
    try {
      const getAllEvents = await Event.find();
      res.status(200).json(getAllEvents);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
    
  };

  export const createEvents= async (req, res) => {


     try {

      const createAnEvent = new Event(req.body)
      createAnEvent.save();
      res.status(201).json(createAnEvent);
    } catch (error) {
    res.status(409).json({ message: error.message });
     }
  
    
  };

export default router;

