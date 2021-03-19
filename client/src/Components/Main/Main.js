import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from "react-bootstrap";
import "./main.css";



function clickMe(){
alert('you clicked me ');
}



class  Main extends React.Component {
    

    render() {
      return (
        <div className='main'>  
            <div className='main-container'> 
              <div className='main-body'>
                <h1 className='main-title'>
                  We Cheer you Up With Our Scheduled Language Activities.
                </h1>
                  <div className='main-divtext'>
                    <p className='main-text'>
                     Welcome to  Speactivity! Here, people team up and make activites to learn a language together.
                    </p>
                  </div>
                  <div className="main-divbutton">
                    <button onClick={clickMe} className='register-button'>Click to register</button>
                  </div>
              </div>
            </div>
        </div>
    );
  }
  }
  
  export default Main;