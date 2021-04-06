import React, { Component } from 'react';
import './Navbar.css';
import Route from 'react-router-dom/Route.js';
import Main from '../Main/Main';
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import Events from '../Events/Events';
import Game from '../Events/Game.js';
import GameDetails from '../Events/GameDetails.js';
import Join from '../chatroom/components/join/Join.js';
import Chat from '../chatroom/components/chat/Chat.js';
import Participants from '../Events/Participants.js';



import {BrowserRouter as Router,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';




 class Navbar extends React.Component { 
   

    render() {
        return(
            <Router>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">SPEACTY</h1>
                <div className='menu-icon'>
                    <ul className='nav-menu'>
                    <li>
                        <Link className='nav-links' to="/Main">Main</Link>
                    </li>  
                    <li >
                        <Link className='nav-links' to="/Login">Login</Link>
                    </li>    
                    <li >
                        <Link className='nav-links' to="/Signup">Signup</Link>
                    </li>
                    <li >
                        <Link className='nav-links' to="/Events">Events</Link>
                    </li>
                    <li >
                        
                    </li>                        
                    </ul>
                </div>
            </nav>
            <Route path="/" exact component={Main}/>
            <Route path="/main" exact component={Main}/>
            <Route path="/join" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/events" exact component={Events}/>
            <Route path="/game" exact component={Game}/>
            <Route path="/gameDetails" exact component={GameDetails}/>
            <Route path="/participants" exact component={Participants}/>
        </Router>
        )
    }

 }

export default Navbar