import mongoose from 'mongoose';

const connectDB = async ()  => {
await mongoose.connect(process.env.DB ||"mongodb+srv://nour:nour@cluster0.kzuih.mongodb.net/User?retryWrites=true&w=majority",{
useNewUrlParser: true,
useCreateIndex:true,
useFindAndModify: true,
useUnifiedTopology: true ,


});
console.log('MongoDB is connected')
};

export default connectDB ;