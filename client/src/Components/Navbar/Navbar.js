import React, { Component } from 'react';
import './Navbar.css';

import { Redirect, Route } from "react-router-dom";

/*import  Route  from 'react-router-dom/Route.js';*/
import Main from '../Main/Main';
import Login from '../Login/Login.js';
import Signup from '../signup/Signup.js';
import Events from '../Events/Events';
import GameDetails from '../Events/GameDetails.js';
import Game from '../Events/Game.js';

import Join from '../chatroom/components/join/Join.js';
import Chat from '../chatroom/components/chat/Chat.js';
import Participants from '../Events/Participants.js';



import Private from '../Private'
import ForgotPassword from '../forgotpassword/Forgotpassword';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import Resetpassword from '../Resetpassword/Resetpassword'
import GameIndex from '../game/GameIndex'
import GameFr from '../game/GameFr';
import GameDe from '../game/GameDe';


import PrivateRoute from '../routing/PrivateRouting'
const Navbar = ()=>{


       
      
          
        const logoutHandler =()=>{
            localStorage.removeItem("authToken");
            <Redirect to="/login" />
            }

     return (
     
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
                    <Link className='nav-links' onClick= {logoutHandler}>LOGOUT</Link>
                    
                </li>
                
                </ul>
            </div>
        </nav>
        <PrivateRoute exact path="/" component={Private} />

        <Route path="/main" exact component={Main}/>
        <Route path="/join" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/events" exact component={Events}/>
        <Route path="/gameDetails" exact component={GameDetails}/>
        <Route path="/game" exact component={Game}/>
        <Route path="/participants" exact component={Participants}/>


        <Route path="/forgotpassword" exact component={ForgotPassword}/>
        <Route path="/resetpassword/:resetToken" exact component={Resetpassword}/>

        <Route path="/onlinegame" exact component={GameIndex}/>
        <Route path="/gamefr" exact component={GameFr}/>
        <Route path="/gamede" exact component={GameDe}/>





        
    </Router>
    )

    
}



    

            
 

export default Navbar