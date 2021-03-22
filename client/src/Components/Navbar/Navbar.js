import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';




 class Navbar extends React.Component { 

 

    render() {
        return(
            <Router>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Toegelang</h1>
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
        </Switch>
        </Router>
        )
    }

 }

export default Navbar;