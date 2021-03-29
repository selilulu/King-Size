import express from 'express';
//import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

import myRoutes from './routes/routes.js';

const app = express();
app.use(express.json());


//mysql connection
const db = mysql.createPool({
  host: 'localhost',
  user:'root',
  password:'password',
  database:'language_project'
});

app.post("/signup",(req,res) =>{
  const sqlInsert="INSERT INTO users (firstName,lastName,email,password) VALUES ('selin','tezel','stzl@gmail.com','123456');"
  db.query(sqlInsert,(err,result)=>{
    res.send('hellow')
  })
});

app.listen(5000,()=>{
  console.log('running on port 5000')
})


//end of mysql connection

//app.use(express.urlencoded());
//app.use("/user", myRoutes);


// const CONNECTION_URL = "mongodb+srv://selin:selin@cluster0.o2i6c.mongodb.net/mytable?retryWrites=true&w=majority"


// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);





