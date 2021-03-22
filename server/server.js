const express =  require('express');
const socketIo = require('socket.io');
const http = require('http');
const router = require('./router')
const PORT = process.env.PORT || 4200;
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')
const app = express();
const server = http.createServer(app);
const cors = require('cors');

app.use(cors());
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  });


/*,{cors:{
    origin:'http://localhost:3000',
    methods:[‘GET,‘POST’],
    credentials:true
    }
    })*/


app.use(router);

io.on('connect', (socket) =>{
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
    
        if(error) return callback(error);
    
        socket.join(user.room);

 

    socket.emit('message', {user: 'admin', text: `${user.name} welcome to ${user.room} `});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
    callback();

    
});
socket.on('sendMessage', (message, callback)=>{
    const user = getUser(socket.id);
    io.to(user.room).emit('message', {user: user.name , text: message});
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});

    callback();
})
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text:`${user.name} has left.` });
        }

    })
})


server.listen(PORT, () => console.log('server has started on port'+ PORT));
