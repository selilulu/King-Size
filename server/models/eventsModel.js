import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({

eventTitle:{
    type:String
},
eventDescription:{
    type:String
},
date:{
    type:Date
}

});

const Event =mongoose.model("Event",eventSchema);
export default Event;
