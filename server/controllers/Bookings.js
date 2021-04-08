import express from 'express';
import Bookings from '../models/bookingsModel.js'

const router = express.Router();

export const showAllBookings= async (req, res) => {


    //res.send({response: "This is participants API." }).status(200);
    try {
    const getAllBookings = await Bookings.find();
    // Users.find().forEach(function(d){ getSiblingDB('bookings')['FirstName'].insert(d); });
      res.status(200).json(getAllBookings);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }

    
  };

  export const createBookings= async (req, res) => {


    try {

     const createABooking = new Bookings(req.body)
     createABooking.save();
     res.status(201).json(createABooking);
   } catch (error) {
   res.status(409).json({ message: error.message });
    }
 
   
 };

 
export default showAllBookings;

