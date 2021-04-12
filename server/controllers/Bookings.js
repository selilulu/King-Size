import express from 'express';
import Bookings from '../models/bookingsModel.js'
import route from '../routes/auth.js';

const router = express.Router();

router.route('/').get((req, res) =>{
  Bookings.find()
  .then(bookings =>res.json(bookings))
  .catch(err=> res.status(400).json('Error:'+err ))
});
router.route('/bookings').post((req, res) =>{
  const userName=req.body.userName;
  const userId=req.body.userId;

  const newBookings = new Bookings({
    userName,
    userId
  });

  newBookings.save()
  .then(() =>res.json('booking is added'))
  .catch(err=> res.status(400).json('Error:'+err ))

})

// export const showAllBookings= async (req, res) => {


//     //res.send({response: "This is participants API." }).status(200);
//     try {
//     const getAllBookings = await Bookings.find();
//       res.status(200).json(getAllBookings);
//     } catch (error) {
//       res.status(404).json({ message: error.message });
//     }

    
//   };

//   export const createBookings= async (req, res) => {
//     const userName = req.body.userName;
//     const userId=req.body.userId;

//     try {

//     const createABooking = new Bookings({
//       userName,userId
//     });
//     createABooking.save();
//     res.status(201).json(createABooking);

//     }catch (error) {
//    res.status(409).json({ message: error.message });
//     }
 
   
//  };

 route.route("/:id").get((req, res) =>{
  showAllBookings.findById(req.params.id)
  .then(bookings => res.json(bookings))
  .catch(err => res.status(400).json('Error:'+ err))
  });
  
 route.route("/:id").delete((req, res) =>{
  Bookings.findByIdAndDelete(req.params.id)
  .then(bookings => res.json("booking is deleted"))
  .catch(err => res.status(400).json('Error:'+ err))
  });
  
 route.route("/update/:id").post((req, res) =>{
  Bookings.findById(req.params.id)
  .then(bookings =>{
    bookings.userName=req.body.userName;
    bookings.userId=req.body.userId;

    bookings.save()
    .then(()=>res.json('Booking is updated'))
    .catch(err =>res.status(400).json('Error:'+ err));

  })
  .catch(err => res.status(400).json('Error:'+ err))
  });


module.exports=router;
 
export default showAllBookings;

