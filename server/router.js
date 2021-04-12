import express from 'express';
import {events,createEvents} from './controllers/events.js';
import {showAllBookings,createBookings} from './controllers/Bookings.js';
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

router.get("/events", events )
router.post("/events", createEvents )

//------------------------------------------------------------------------------------------

//router.get("/bookings", showAllBookings)
//router.post("/bookings",createBookings)






export default router;