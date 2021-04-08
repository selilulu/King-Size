import React from 'react';
import './Game.css';
import ImageSlider from './ImageSlider'
import {SliderData} from './SliderData.js'
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Join from '../chatroom/components/join/Join';
import Chat from '../chatroom/components/chat/Chat';
import axios from 'axios';

class Game extends React.Component {

    

    render() {
        const bookingsHandler = async (e) => {
            e.preventDefault();
            console.log('im clicked');
          
            const config = {
              header: {
                "Content-Type": "application/json",
              },
            };
          
            try {
              const { data } = await axios.post(
                "http://localhost:5000/bookings",
                config
              );
          
            } catch (error) {
              
            }
          };
    return(

        <div className="game-container">
            <div className="text-container">
                <div className="question-div">
                    <p className="question">Does Playing Games To Practise Your English Sounds Fun To You ?</p>
                </div>

                <ImageSlider slides={SliderData}/>

                <div className="image-button">
                    <h2>Every Sunday at 14:00</h2>
                    <h2>Meet up point: Ghent Center at Cafe Renee!</h2>
                    <Link to ="/participants"  className="main-button game" onClick={bookingsHandler}>Participate</Link>

                    
                    <Link className="main-button game" onClick={()=> window.open("http://localhost:3000/join")} >ChatRoom</Link>
                </div>
            </div>
            <div className="learn-more-div">
                <Button className="learn-more-btn" href="/GameDetails" variant="warning">Learn More</Button> 
            </div>
        </div>
        )
    }
}


export default Game;
