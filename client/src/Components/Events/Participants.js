import React, { useState, useEffect } from 'react'
import ParticipantsList from './ParticipantsList.js'
import './Participants.css';


function Participants() {
    const [participants,setParticipants]= useState(null);

    useEffect( ()=> {
        fetch('http://localhost:8000/participants')
        .then(res =>{
            return res.json();
        })
        .then(data => {
            // console.log(data);
            setParticipants(data);
        });


    },[]);
    return (
        <div>
        {participants && <ParticipantsList participants={participants} title="Boardgame Event Participants" />} 
        </div>
    )
}

export default Participants
