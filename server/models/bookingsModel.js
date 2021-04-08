import mongoose from 'mongoose';

const bookingsSchema = new mongoose.Schema({

userName:{
    type:String
},  
userId:{
    type:String
}

});

const Bookings =mongoose.model("Bookings",bookingsSchema);
export default Bookings;
