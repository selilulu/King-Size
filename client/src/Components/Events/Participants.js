import React, { useState, useEffect } from 'react'
import ParticipantsList from './ParticipantsList.js'
import './Participants.css';

// let mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoClient.connect(function(err, client){
//     assert.equal(null, err);
//     client.db('dbName').command({usersInfo:1 }).then((userList)=>{
//         console.log('user List',util.inspect(userList, {showHidden: false, depth: null}));
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// }




function Participants() {
    // const [participants,setParticipants]= useState(null);
    

    //useEffect( ()=> {
    //fetch('http://localhost:5000/participants')
    //.then(res =>{
    //         return res.json();
    //     })
    //     .then(data => {
    //         // console.log(data);
    //         setParticipants(data);
    //     });


    // },[]);
    // return (
    //     <div>
    //         <h1>Work in Progress</h1>
    //     {participants && <ParticipantsList participants={participants} title="Boardgame Event Participants" />} 
    //     </div>

    return(
        <>
        <h1>WORK IN PROGRESS...</h1>
        </>
    )
    
}

export default Participants 
