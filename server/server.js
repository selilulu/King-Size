import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import myRoutes from './routes/routes.js';



const app = express();

//middleware
app.use(cors());
app.use("/user", myRoutes);



const CONNECTION_URL = "mongodb+srv://selin:selin@cluster0.o2i6c.mongodb.net/mytable?retryWrites=true&w=majority"



const PORT = process.env.PORT||5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);





