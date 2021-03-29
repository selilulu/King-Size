import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route.js';
import Main from '../Main/Main';
import Login from '../Login/Login.js';
import Signup from '../signup/Signup.js';
import Events from '../Events/Events';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown  from 'react-bootstrap/DropdownButton';




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
                    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">English</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Dutch</Dropdown.Item>
    <Dropdown.Item href="#/action-3">French</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
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
        </Switch>
        </Router>
        )
    }

 }

export default Navbar;