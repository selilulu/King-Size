import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route.js';
import Main from '../Main/Main';
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import Events from '../Events/Events';
// import Game from '../Events/Game.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';




 class Navbar extends React.Component { 
    languages={
        myArray:[<button href='#'>English"</button>, <button href='#'> "French"</button>,<button href='#'>"Dutch"</button>]
    }
 
    

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
                        <div>

                        <DropdownButton variant='primary' title="Select language" >
                        {this.languages.myArray.map(data=>(
                        <option title={data}>{data}</option>
                        ))}
                        </DropdownButton>
                        </div>
                    </li>                        
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact strict path="/">
                    <Main/>
                </Route>
                <Route exact strict path="/Login">
                    <Login/>
                </Route>
                <Route exact strict path="/Main">
                    <Main/>
                </Route>
                <Route exact strict path="/Signup">
                    <Signup/>
                </Route>
                <Route exact strict path="/Events">
                    <Events/>
                </Route>
                {/* <Route exact strict path="/Game">
                    <Game/>
                </Route> */}
        </Switch>
        </Router>
        )
    }

 }

export default Navbar