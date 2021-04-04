import React from 'react';
import './Game.css';
import ImageSlider from './ImageSlider'
import {SliderData} from './SliderData.js'
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Join from '../chatroom/components/join/Join';
import Chat from '../chatroom/components/chat/Chat';


class Game extends React.Component {

    render() {

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
                    <Link className="main-button game">Participate</Link>
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
