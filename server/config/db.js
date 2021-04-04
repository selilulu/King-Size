import mongoose from 'mongoose';

const connectDB = async ()  => {
await mongoose.connect(process.env.DB,{
useNewUrlParser: true,
useCreateIndex:true,
useFindAndModify: true,
useUnifiedTopology: true ,


});
console.log('MongoDB is connected')
};

export default connectDB ;