dotenv.config();
import express from 'express';
//import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import auth from './routes/auth.js'
import ano from './routes/private.js'


import * as io from 'socket.io';
import http from 'http';
import router from './router.js';
const PORT = process.env.PORT || 5000;
import { addUser, removeUser, getUser, getUsersInRoom }from './users.js'
const app = express();
/*const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 0,
    socketTimeoutMS: 0,
    family: 4
  };
  mongoose.connect(process.env.DB, options)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));*/

 

connectDB();
  const server = http.createServer(app);
   app.use(express.json())


   app.use(cors())

   app.use('/app/auth', auth)
   app.use('/app/private', ano)
   
 
  const socketio = new io.Server(server,{
      cors:{
        origins: ["*"],
    
    handlePreflightRequest: (req, res) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "my-custom-header",
        "Access-Control-Allow-Credentials": true
      });
      res.end();
    }}
  });

  
 
   
 
  
  app.use(router);


 



socketio.on('connect', (socket) =>{
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
    
        if(error) return callback(error);
    
        socket.join(user.room);

 

    socket.emit('message', {user: 'admin', text: `${user.name} welcome to ${user.room} `});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    socketio.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
    callback();

    
});
socket.on('sendMessage', (message, callback)=>{
    const user = getUser(socket.id);
   socketio.to(user.room).emit('message', {user: user.name , text: message});
   socketio.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});

    callback();
})
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user){
            socketio.to(user.room).emit('message', {user: 'admin', text:`${user.name} has left.` });
        }

    })
})


server.listen(PORT, () => console.log('server has started on port'+ PORT));
