import react from 'react';


const ParticipantsList =({participants,title})=>{
    return(
        <div className="part-container">
            <p className="part-title">{title}</p>

            {/* <img className="group-image" src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/> */}

            {participants.map((part)=>(

            <div className="part-preview" key={part.id}>
                <h1>{part.firstName}</h1>

                <h1>{part.lastName}</h1>

            </div>
            
             ))}
        </div>
    );
}

export default ParticipantsList;

